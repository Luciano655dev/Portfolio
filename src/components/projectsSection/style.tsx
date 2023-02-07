import styled from 'styled-components'

export const MainTwo = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
/* #12121b */
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    &:hover {
      transition: 1s;
    }

    div{
      background-color: white;
      z-index: 10;
      border-radius: 10px;
      width: 30vw;
      min-width: 20rem;
      height: 70vh;
      margin: 30px;
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
      font-size: 3vh;
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
`