import { MainOne, Card, ProfilePic, Info, Buttons } from './styleOne.jsx'

// Bubble
const { innerWidth: width } = window
const qnt = width<=500?10:20
let cords: any = []
let html: any = []
for(let i=0; i<=qnt; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (95 - 5) + 5), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
for(let i=1; i<=qnt; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: '#161623', animationDuration: `${cords[i].animDuration}s` }}></div>)

export default function mainOne(props: any){
    const options = {
        speed: 100,
        max: 4
    }
    const { Tilt, userInfo } = props
    const { name, bio, img } = userInfo

    const tiltStyle = {
        transformStyle: 'preserve-3d',
        height: '80vh',
        width: '45rem',
        borderRadius: '30px',
        padding: '0rem 5rem',
    
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
    
    return(
        <MainOne>
            {html.map((div: any)=>div)}
                <Tilt style={tiltStyle} options={options}>
                    <Card>
                        <ProfilePic>
                            <img src={img}/>
                        </ProfilePic>
                
                        <Info>
                            <h1 className="title">{name}'s portfolio</h1>
                            <h3>{bio}</h3>
                            <Buttons>
                                <a href="#mainOne">Home</a>
                                <a href="#mainTwo">Projects</a>
                                <a href="#mainThree">Social</a>
                                <a href="#footer">Contact</a>
                            </Buttons>
                        </Info>
                    </Card>
                </Tilt>
        </MainOne>
    )
}