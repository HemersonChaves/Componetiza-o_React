import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ITransaction{
    id:number,
    title:string,
    amount:number,
    type:string,
    category:string,
    createdAt:string
}

export function TransactionTable(){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transactions =>(
                        <tr key={transactions.id}>
                        <td>{transactions.title}</td>
                        <td className="deposit">{transactions.amount}</td>
                        <td>{transactions.category}</td>
                        <td>{transactions.createdAt}</td>
                    </tr>
                    ))}
                    
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000</td>
                        <td>Casa</td>
                        <td>12/11/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/11/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
        
    );
}