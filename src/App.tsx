import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseNewTransactionModal}
      //style={customStyles}
      //contentLabel="Example Modal"
      >
        <h2>Cadastrar Informações</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
