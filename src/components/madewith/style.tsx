import styled from 'styled-components'

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 6vh;
        margin: 2vw;
        padding: 3vh;
        padding-bottom: 5vh;

        background-color: white;
        border-radius: 15px;
    }

    div{
        display: flex;
        flex-direction: row;
        padding: 5vh;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
        background-color: white;
        border-radius: 15px;
        max-width: 1200px;
    }

    @media screen and (max-width: 500px) {
        div{
            flex-direction: column;
            padding: 3vh;
        }
        h1{
            font-size: 7vw;
            margin: 4vw;
        }
    }
`


export const Icon = styled.img`
    width: 20vw;
    padding: 2vw;

    @media screen and (max-width: 500px) {
        padding-top: 5vw;
        width: 30vw;
    }
`