import styled from 'styled-components';
const Title = styled.h1`
  color:#8257e6;
  font-size: 64px;
  button {
    background-color: #232323;
  }
`

export function App() {
  return (
    <div className="App">
      <Title className="title">Hello World
      <button>Salvar</button>
      </Title>
    </div>
  );
}
