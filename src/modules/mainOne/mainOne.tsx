import './mainOne.css'

// Bubble
let cords: any = []
let html: any = []
for(let i=0; i<=20; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (95 - 5) + 5), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
for(let i=1; i<=20; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: '#161623', animationDuration: `${cords[i].animDuration}s` }}></div>)

export default function mainOne(props: any){
    const options = {
        speed: 100,
        max: 4
    }
    const { Tilt, userInfo } = props
    const { name, bio, img } = userInfo
    
    return(
        <div className="mainOne">s
            {html.map((div: any)=>div)}
                <Tilt className="card" options={options}>
                    <div className="profilePic">
                        <img src={img}/>
                    </div>
            
                    <div className="info">
                        <h1 className="title">{name}'s portfolio</h1>
                        <h3>{bio}</h3>
                        <div className="sizes">
                            <a href="#mainOne">Home</a>
                            <a href="#mainTwo">Projects</a>
                            <a href="#mainThree">Social</a>
                            <a href="#footer">Contact</a>
                        </div>
                    </div>
                </Tilt>
        </div>
    )
}