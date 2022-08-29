import { useState } from "react";
import ModalBtn from "./components/modalBtn";
import Modal from "./components/modal";
import Portal from "./components/Portal";

function App() {
  const [onModal, setOnModal] = useState(false);

  const clickModal = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <ModalBtn onOpen={clickModal} />
      {onModal && (
        <Portal>
          <Modal onClose={clickModal} />
        </Portal>
      )}
      {/* <Portal>
        <Modal onClose={clickModal} />
      </Portal> */}
    </>
  );
}

export default App;
