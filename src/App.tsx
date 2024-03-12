import { useState } from "react";
import "./App.css";
import Dialog from "./components/Dialog";
import DialogNative from "./components/DialogNative";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      {/* <Dialog
        isOpen={isOpen}
        toggle={toggleModal}
      /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellendus tenetur ab,
        provident, odio optio sunt ut quasi error
        fugit, quos officiis in enim cumque fuga id eum
        consequuntur eaque placeat!
      </p>
      <DialogNative
        isOpen={isOpen}
        toggle={toggleModal}
      />
    </>
  );
}

export default App;
