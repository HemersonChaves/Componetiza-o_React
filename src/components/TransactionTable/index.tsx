import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionTable(){
    const{transactions} = useContext(TransactionsContext);

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