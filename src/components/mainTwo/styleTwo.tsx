import styled from 'styled-components'

export const MainTwo = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
  
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
/* #12121b */
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;

    div{
      background-color: white;
      border-radius: 10px;
      height: 60vh;
      width: 40rem;
      margin-left: 3%;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      z-index: 3;
    }
    div h1{
      margin: 10px;
      font-size: 4vh;
    }
    div h3{
      margin: 3vh;
      font-size: 2vh;
      max-width: 45rem;
      white-space: unset;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    div a {
      padding: 0.5rem;
      background: none;
      border: none;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      cursor: pointer;
      font-weight: bold;
      color: #1b1b20;
      text-decoration: none;

      margin: 0.2vw;
      transition: 0.5s;
    }
    div a:hover {
      background: #161623;
      color: white;
    }
    div a:active{
      transform: translateY(-2px);
    }

    @media screen and (max-width: 500px) {
      div {
        width: 20rem;
      }
      div h1{
        font-size: 3vh;
      }
      div h3{
        max-width: 20rem;
      }
    }
`