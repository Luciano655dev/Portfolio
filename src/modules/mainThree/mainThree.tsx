import './mainThree.css'

// Bubble
const { innerWidth: width } = window
const qnt = width<=500?10:20
let cords: any = []
let html: any = []
for(let i=0; i<=qnt; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (95 - 5) + 5), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
for(let i=1; i<=qnt; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: '#161623', animationDuration: `${cords[i].animDuration}s` }}></div>)

export default function mainThree(props: any){
    const options = {
        speed: 1000,
        max: 5
    }

    const { Tilt } = props
    return (
        <div className="mainThree" id="mainThree">
            {html.map((div: any)=>div)}
            <div className="socialContainer">
                <Tilt className="socialCard" options={options}>
                    <div className="content">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    <div className="contentAnim">
                        <h3>Git Hub</h3>
                        <p>Veja todos os meus projetos com o código-fonte e tudo mais!</p>
                    </div>
                    </div>
                </Tilt>
                <Tilt className="socialCard" options={options}>
                    <div className="content">
                    <img src="https://cdn-icons-png.flaticon.com/512/81/81609.png"/>
                    <div className="contentAnim">
                        <h3>Twitter</h3>
                        <p>Todas as minhas postagens recentes sobre qualquer coisa que vier!</p>
                    </div>
                    </div>
                </Tilt>
                <Tilt className="socialCard" options={options}>
                    <div className="content">
                    <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
                    <div className="contentAnim">
                        <h3>Instagram</h3>
                        <p>Minhas fotos e alguns vídeos de lugares e eventos bacanas!</p>
                    </div>
                    </div>
                </Tilt>
                <Tilt className="socialCard" options={options}>
                    <div className="content">
                    <img src="https://cdn-icons-png.flaticon.com/512/4423/4423460.png"/>
                    <div className="contentAnim">
                        <h3>Twitch</h3>
                        <p>Live vários dias diferentes 20:00hrs! Vai lá!</p>
                    </div>
                    </div>
                </Tilt>
                <Tilt className="socialCard" options={options}>
                    <div className="content">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png"/>
                    <div className="contentAnim">
                        <h3>Discord</h3>
                        <p>A melhor forma de falar comigo!</p>
                    </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}