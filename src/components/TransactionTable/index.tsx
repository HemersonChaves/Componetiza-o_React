import { useTransactions } from "../../hookd/useTransactions";
import { Container } from "./styles";

export function TransactionTable(){
    const{transactions} = useTransactions();

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
                        <td className={transactions.type}>{new Intl.NumberFormat('pt-br',{
                            style:'currency',
                            currency: 'BRL'
                        }).format(transactions.amount)}</td>                        
                        <td>{transactions.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-br').format(
                            new Date(transactions.createdAt))
                       }</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
        
    );
}