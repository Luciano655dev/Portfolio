import 'swiper/css'
import { MainTwo, Container } from './styleTwo.js'

export default function mainTwo(props: any){
    return(
        <MainTwo id='mainTwo'>
            <Container>
                    {
                        props.repos.slice(0, 3).map((repo: any)=>{
                            return (
                                <div key={Math.random()}>
                                    <h1>{repo.name}</h1>
                                    <h3>{repo.description}</h3>
                                    <a href={repo.html_url}>Access here</a>
                                </div>
                            )
                        })
                    }
            </Container>
        </MainTwo>
    )
}