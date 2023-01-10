import styled from 'styled-components'

export const FooterStyled = styled.footer`
    position: absolute;
    width: 100%;
    height: 10%;
    background: #161623;
    top: 300%;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      position: absolute;
      color: white;
      top: 0;
      margin-top: 10px;
    }
    div p{
      margin: 10px;
      margin-left: 10px;
      font-size: 0.9rem;
    }
    div a{
      color: white;
      text-decoration: none;
    }
    div a:hover{
      color: #7c7c7c;
    }
    
    @media screen and (max-width: 500px) {
      footer .contact p{
        margin: 3px;
        font-size: 0.7rem;
      }
    }
`

export const CopyrightTxt = styled.p`
  position: absolute;
  color: white;
  bottom: 3px;
`