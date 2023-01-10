import styled from 'styled-components'

export const MainThree = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 200%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
`
  
export const Card = styled.div`
    position: relative;
    width: 320px;
    height: 30vh;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    transition: 0.5s;
    cursor: pointer;

    &:hover{
      background: #12121b;
    }

    &:hover div div div{
      transform: translateY(0px);
      opacity: 1;
    }

    @media screen and (max-width: 1000px) {
      height: 15vh;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`

export const CardContent = styled.div`
  padding: 20px;
  text-align: center;
  transition: 0.5s;

  div {
    transition: 0.5s;
    transform: translateY(100px);
    opacity: 0;
  }
  img {
    position: fixed;
    top: 20px;
    right: 20px;
  }
  h3 {
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
  }
  p {
    font-size: 1em;
    color: #fff;
    font-weight: 300px;
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 300px;
      left: -40px;
    }
  }
`