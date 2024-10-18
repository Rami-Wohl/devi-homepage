import { type Message } from "@prisma/client";
import { useEffect } from "react";
import CloseIcon from "~/components/icons/close-icon";
import { formatDateTime } from "~/lib/utils";

interface ModalPropType {
  onClose: () => void;
  message: Message;
}

const MailModal = ({ onClose, message }: ModalPropType) => {
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="mail-modal"
      className={`fixed inset-0 z-50 mx-2 flex items-center justify-center backdrop-brightness-75`}
      onClick={() => onClose()}
    >
      <div
        className="shadow-hover relative flex h-auto w-auto flex-col gap-6 rounded-md bg-secondary px-10 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute right-4 top-4 h-4 w-4 cursor-pointer"
          onClick={() => onClose()}
        >
          <CloseIcon height={14} width={14} fill="white" />
        </div>
        <div className="flex h-auto max-w-96 flex-col">
          <span className="text-white">From: {message.name}</span>
          <span className="text-white">Email: {message.email}</span>
          <span className="mb-4 text-white">
            Sent: {formatDateTime(message.createdAt)}
          </span>
          <span className="text-white">{message.question}</span>
        </div>
      </div>
    </div>
  );
};

export default MailModal;
