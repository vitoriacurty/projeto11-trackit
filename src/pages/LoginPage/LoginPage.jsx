import styled from "styled-components"
import logo from "../../assets/logo.svg"

export default function LoginPage() {
    return (
        <Page>
            <img src={logo} alt="Logo track it" />
            <ContainerForm>
                <input placeholder="email" />
                <input placeholder="senha"/>
                <button>Entrar</button>
            </ContainerForm>
            <p>Não tem uma conta? Cadastre-se</p>

        </Page>
    )
}

const Page = styled.div`
    height: 80vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 130px 35px;
    img {
        margin-bottom: 30px;
    }
    p {
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-top: 25px;
        text-decoration-line: underline;
        color: #52B6FF;
    }    
`

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    input {
          width: 300px;
          height: 45px;
          font-size: 18px;
          border: 1px solid #D5D5D5;
          border-radius: 5px;
          background: #FFFFFF;
          padding: 10px;
      }
      button {
        width: 300px;
        height: 45px;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        text-align: center;
        color: #FFFFFF;
        background: #52B6FF;
        cursor: pointer;
      }
`