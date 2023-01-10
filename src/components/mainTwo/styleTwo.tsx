import styled from 'styled-components'

export const MainTwo = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #12121b;
  
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Title = styled.h1`
  font-size: 4vh;
  margin: 1.5%;
  z-index: 1;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #12121b;
`

export const Swiper = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    max-width: 100%;

    &::-webkit-scrollbar {
      height: 5px;
      background: #1b1b20;
      border-radius: 15px;
      margin-top: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 20px;
      border: 1px solid black;
    }

    div{
      background-color: white;
      border-radius: 10px;
      height: 40vh;
      width: 50rem;
      margin-left: 3%;
    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      z-index: 3;

      flex-shrink: 0;
      position: relative;
      transition-property: transform;
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