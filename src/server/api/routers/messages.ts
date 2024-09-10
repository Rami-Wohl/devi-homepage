import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const contactFormSchema = z.object({
  email: z.string().email("Must be valid email"),
  question: z.string(),
});

export const messagesRouter = createTRPCRouter({
  createMessage: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, question } = input;

      try {
        return await ctx.db.message.create({
          data: {
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
