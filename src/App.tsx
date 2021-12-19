import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 64px;
  color: #8257e6;
`

export function App(): JSX.Element {
  return (
    <div className="App">
      <Title>Hellor world</Title>
    </div>
  );
}

