import styled from 'styled-components'

export const MainOne = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    transform-style: preserve-3d;
    height: 80vh;
    width: 45rem;
    border-radius: 30px;
    padding: 0rem 5rem;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 500px) {
      width: 80%;
    }
`

export const ProfilePic = styled.div`
    transform-style: preserve-3d;
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20rem;
      z-index: 2;
      border-radius: 10px;
      transition: all 0.5s ease-out;
    }

    @media screen and (max-width: 500px) {
      img {
        width: 15rem;
        z-index: 2;
        border-radius: 10px;
        transition: all 0.5s ease-out;
      }
    }
`

export const Info = styled.div`
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2rem;
      transition: all 0.70s ease-out;
    }
    h3 {
      font-size: 1.3rem;
      padding: 2rem 0rem;
      color: #585858;
      font-weight: lighter;
      transition: all 0.9s ease-out;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    transition: all 1.1s ease-out;

    a {
      padding: 0.5rem 2rem;
      width: 4vw;
      background: none;
      border: none;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      color: #585858;
      text-decoration: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: white;

      margin: 0.2vw;
      transition: 0.5s;
    }
    a:hover {
      background: #161623;
      color: white;
    }
    a:active{
      background: #12121b;
      color: white;
    }

    @media screen and (max-width: 500px) {
    a{
      width: 2.5rem;
      font-size: 3vw;
    }
  }
`