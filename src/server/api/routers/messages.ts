import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { sendMail } from "~/server/mailer";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email("Must be valid email"),
  question: z.string(),
});

const toggleReadMessageSchema = z.object({
  id: z.number(),
  read: z.boolean(),
});

export const messagesRouter = createTRPCRouter({
  createMessage: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ ctx, input }) => {
      const { name, email, question } = input;

      sendMail(name, email, question);

      try {
        return await ctx.db.message.create({
          data: {
            name: name,
            email: email,
            question: question,
          },
        });
      } catch (e) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: String(e),
        });
      }
    }),
  toggleReadMessage: protectedProcedure
    .input(toggleReadMessageSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, read } = input;

      try {
        return await ctx.db.message.update({
          where: {
            id,
          },
          data: {
            read: read,
          },
        });
      } catch (e) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: String(e),
        });
      }
    }),

  getMessages: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.db.message.findMany({});
    } catch (e) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: String(e),
      });
    }
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
