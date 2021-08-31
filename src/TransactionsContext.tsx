import { createContext, useState,useEffect, ReactNode } from "react";
import { api } from "./services/api";
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
    createTransaction:(transaction:ITransactionInput)=>void;

}
interface TransactionProviderProps{
    children:ReactNode;
}

export const TransactionsContext = createContext<ITransactionContextData>({}as ITransactionContextData);


export function TransactionsProvider({children}:TransactionProviderProps){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transactions: ITransactionInput){
       
        api.post('/transactions', transactions);

    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}