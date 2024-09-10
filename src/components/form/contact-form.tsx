"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { api } from "~/trpc/react";
import Spinner from "../icons/spinner";

const contactFormSchema = z.object({
  email: z.string().email("Must be valid email"),
  question: z.string(),
});

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { mutateAsync, isPending } = api.message.createMessage.useMutation();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      question: "",
    },
  });

  const handleSubmit = async ({
    email,
    question,
  }: z.infer<typeof contactFormSchema>) => {
    try {
      await mutateAsync({
        email,
        question,
      });
      setSubmitted(true);
    } catch (err) {
      form.setError("root.validation", {
        type: "custom",
        message: t("form.submitError"),
      });

      console.error(err);
    }
  };

  if (submitted) {
    return <div>{t("form.thanks")}</div>;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col gap-6 bg-transparent"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.email")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="text-black"
                  placeholder={t("form.emailPlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.question")}</FormLabel>
              <FormControl>
                <Textarea
                  required
                  {...field}
                  autoComplete="on"
                  className="text-black"
                  placeholder={t("form.questionPlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.errors?.root?.validation && (
          <FormMessage>
            {form.formState.errors.root.validation?.message}
          </FormMessage>
        )}
        {isPending ? (
          <Button className="mt-8" disabled>
            <Spinner />
          </Button>
        ) : (
          <Button type="submit" className="mt-8">
            {t("form.submit")}
          </Button>
        )}
      </form>
    </Form>
  );
}
