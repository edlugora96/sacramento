import style from "styled-components"

export const FooterMenu = style.section`
  padding: 0.5rem 0;
  max-width: 100%;
  color: #fff;
  background-color: #000;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  & > * {
    margin: 0 auto;
    display: grid;
    justify-items: center;
    grid-auto-flow: column;
    max-width: 75%;
    padding: 0.7rem;
}
`
