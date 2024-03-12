import {
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function Dialog({
  isOpen,
  toggle,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>Hi</ModalHeader>
      <ModalBody>
        <p>Mom</p>
      </ModalBody>
      <ModalFooter>
        <button
          className="btn btn-primary"
          onClick={toggle}
        >
          OK
        </button>
      </ModalFooter>
    </Modal>
  );
}
