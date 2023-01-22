import styled from 'styled-components'

export const StyledArticle = styled.article`
  box-shadow: 1px 1px 10px var(--bs-100);
  border-radius: 0.4rem;
  background-color: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};

  header {
    img {
      width: 100%;
      height: 150px;
      border-radius: 0.4rem 0.4rem 0 0;
    }
  }

  div {
    padding: 2rem 1.5rem;

    p {
      margin: 0.3rem 0;
      span {
        font-weight: 600;
      }
    }
  }
`
