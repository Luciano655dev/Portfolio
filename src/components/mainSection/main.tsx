import { MainOne, Card, ProfilePic, Info, Buttons } from './style.js'

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
        <MainOne id='home'>
                <Tilt style={tiltStyle} options={options}>
                    <Card>
                        <ProfilePic>
                            <img src={img}/>
                        </ProfilePic>
                
                        <Info>
                            <h1 className="title">{name}'s portfolio</h1>
                            <h3>{bio}</h3>
                            <Buttons>
                                <a href="#home">Home</a>
                                <a href="#projects">Projects</a>
                                <a href="#social">Social</a>
                                <a href="#contact">Contact</a>
                            </Buttons>
                        </Info>
                    </Card>
                </Tilt>
        </MainOne>
    )
}