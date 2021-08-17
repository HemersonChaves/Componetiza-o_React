import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../../assets/fechar.svg'

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
                <input placeholder="Categoria" ></input>
                <button type="submit"> cadastrar</button>
            </Container>


        </Modal>
    )
}