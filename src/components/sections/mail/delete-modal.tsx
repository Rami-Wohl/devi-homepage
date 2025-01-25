import { useEffect } from "react";
import CloseIcon from "~/components/icons/close-icon";
import { Button } from "~/components/ui/button";

interface ModalPropType {
  onClose: () => void;
  onConfirm: (id: number) => void;
  id: number;
}

const DeleteModal = ({ onClose, onConfirm, id }: ModalPropType) => {
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
          <span className="text-white">Delete message with id: {id}?</span>
        </div>
        <Button onClick={() => onConfirm(id)}>Confirm</Button>
      </div>
    </div>
  );
};

export default DeleteModal;
