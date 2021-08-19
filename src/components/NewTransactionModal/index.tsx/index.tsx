import Modal from 'react-modal';
import { Container,TransactionTypeContainer } from './styles';
import closeImg from '../../../assets/fechar.svg';
import entradaImg from '../../../assets/Entradas.svg'
import saidaImg from '../../../assets/Saidas.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal0overlay"
            className ="react-modal-content"
            >
            <h2>Cadastrar Informações</h2>
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container>

                <input placeholder="Título" ></input>
                <input type="number" placeholder="Valor" ></input>
                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    
                    <button
                        type="button"
                    >
                         <img src={saidaImg} alt="Entrada" />
                        <span>Saída</span>
                    </button>

                </TransactionTypeContainer>
                <button type="submit"> cadastrar</button>
            </Container>


        </Modal>
    )
}