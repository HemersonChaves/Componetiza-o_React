import logoSvg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoSvg} alt="dt money" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )

}