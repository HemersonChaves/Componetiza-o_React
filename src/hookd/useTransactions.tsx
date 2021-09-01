import { useContext } from "react";
import { createContext, useState,useEffect, ReactNode } from "react";
import { api } from "../services/api";
interface ITransaction{
    id:number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt:string;
}
type ITransactionInput = Omit<ITransaction, 'id'|'createdAt'>;
//type ITransactionInput = Pick<ITransaction, 'title'|'amount'| 'category' |'type'>;

interface ITransactionContextData{
    transactions:ITransaction[];
    createTransaction:(transaction:ITransactionInput)=>Promise<void>;

}
interface TransactionProviderProps{
    children:ReactNode;
}

const TransactionsContext = createContext<ITransactionContextData>({}as ITransactionContextData);


export function TransactionsProvider({children}:TransactionProviderProps){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionsInput: ITransactionInput){
       
        const response = await api.post('/transactions', {...transactionsInput, createdAt: new Date()});
        const {transaction} = response.data;
        setTransactions([
            ...transactions,transaction,
        ])
        console.log(transaction);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}