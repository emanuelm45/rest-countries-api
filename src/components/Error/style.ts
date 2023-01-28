import styled from 'styled-components'

const DivError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: min(30rem, 80vw);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 20%;
  }
`

export default { DivError }
