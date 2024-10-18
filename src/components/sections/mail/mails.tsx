"use client";

import { useState } from "react";
import { ContentSection } from "~/app/[locale]/portfolio/page";
import { columns } from "./columns";
import { type Message } from "@prisma/client";
import { api } from "~/trpc/react";
import MailModal from "./mail-modal";
import Spinner from "~/components/icons/spinner";
import { GenericTable } from "./table";

export const MailSection = ({
  data,
  name,
}: {
  data: Message[];
  name: string | null | undefined;
}) => {
  const [message, setMessage] = useState<Message | null>(null);

  const { mutate } = api.message.toggleReadMessage.useMutation();

  function handleRowClick(message: Message) {
    setMessage(message);
    mutate({ id: message.id, read: true });
  }

  return (
    <ContentSection title={`Logged in as ${name}`} size="large">
      <div className="flex w-full flex-col items-center py-4">
        {data ? (
          <GenericTable
            onRowClick={handleRowClick}
            columns={columns}
            data={data}
          />
        ) : (
          <Spinner className="mt-4" />
        )}
        {message && (
          <MailModal message={message} onClose={() => setMessage(null)} />
        )}
      </div>
    </ContentSection>
  );
};
