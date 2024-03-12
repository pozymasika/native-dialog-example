import { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function DialogNative({
  isOpen,
  toggle,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;

    if (isOpen) {
      dialog?.showModal();
      dialog?.addEventListener("close", toggle);

      return () => {
        dialog?.removeEventListener("close", toggle);
      };
    } else {
      dialog?.close();
    }
  }, [isOpen, toggle]);

  return (
    <dialog ref={ref}>
      <div className={styles.dialogHeader}>
        <h2>Hi</h2>
        <button
          className="close btn-close"
          onClick={toggle}
        />
      </div>
      <div className={styles.dialogBody}>
        <p>Mom</p>
      </div>
      <form
        method="dialog"
        className={styles.dialogFooter}
      >
        <button
          className="btn btn-primary"
          type="submit"
        >
          OK
        </button>
      </form>
    </dialog>
  );
}
