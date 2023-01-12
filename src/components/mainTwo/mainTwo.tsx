import 'swiper/css'
import { MainTwo, Container } from './styleTwo.jsx'

// Bubble
const { innerWidth: width } = window
const qnt = width<=500?10:20
let cords: any = []
let html: any = []
for(let i=0; i<=qnt; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (95 - 5) + 5), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
for(let i=1; i<=qnt; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: '#12121b', animationDuration: `${cords[i].animDuration}s` }}></div>)

export default function mainTwo(props: any){
    let arr: any = []
    for (let i = 0; i < 3; i++) {
        arr.push(props.repos[i])
    }
    return(
        <MainTwo id='mainTwo'>
            {html.map((div: any)=>div)}
            <Container>
                    {
                        arr.map((repo: any)=>{
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