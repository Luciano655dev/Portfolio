import styled from 'styled-components'

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ghostwhite;

    h1{
        font-size: 6vh;
        margin: 2vw;
        padding: 3vh;
        padding-bottom: 5vh;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 5vh;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
        background-color: white;
        border-radius: 15px;
        max-width: 58vw;
    }

    @media screen and (max-width: 500px) {
        div{
            flex-direction: row;
            padding: 3vh;
        }
        h1{
            font-size: 10vw;
            margin: 2vw;
            padding: 3vh;
        }
    }
`


export const Icon = styled.img`
    width: 10vw;
    padding: 2vw;

    @media screen and (max-width: 500px) {
        padding-top: 5vw;
        width: 20vw;
    }
`