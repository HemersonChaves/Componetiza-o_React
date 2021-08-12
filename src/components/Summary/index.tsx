
import { Container } from "../Summary/styles";
import entradasImg from "../../assets/Entradas.svg";
import SaidasImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Saídas"/>
                </header>
                <strong>- R$500,00</strong>            </div>
            <div className="highlight">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>

    );
}