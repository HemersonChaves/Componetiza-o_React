import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import closeImg from '../../../assets/fechar.svg';
import entradaImg from '../../../assets/Entradas.svg';
import saidaImg from '../../../assets/Saidas.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../../hookd/useTransactions';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const {createTransaction} = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');
    async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();
        await createTransaction({
            title,
            amount,
            category,
            type
        });
        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
        onRequestClose();        
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal0overlay"
            className="react-modal-content"
        >

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Informações</h2>
                <input 
                    placeholder="Título"
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                ></input>
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}                     
                    onChange={event => setAmount(Number(event.target.value))}
                ></input>
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        onClick={() => { setType('deposit'); }}
                        activeColor="green"
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => { setType('withdraw'); }}
                        activeColor="red"
                    >
                        <img src={saidaImg} alt="Entrada" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input 
                    placeholder="Categoria"
                    value={category}                     
                    onChange={event => setCategory(event.target.value)} 
                
                ></input>
                <button type="submit">cadastrar</button>
            </Container>


        </Modal>
    )
}