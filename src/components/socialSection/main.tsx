import { MainThree, Container, Card, CardContent } from './style'

export default function mainThree(props: any){
    const options = {
        speed: 0,
        max: 0
    }

    const { Tilt } = props
    const tiltStyle = {
        position: 'absolute',
        width: '320px',
        height: '30vh',
        margin: '30px',
        borderRadius: '15px',
        overflow: 'hidden',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <MainThree id="social">
            <Container>
                <Card>
                    <Tilt style={tiltStyle} options={options}>
                        <CardContent>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                            <div>
                                <h3>Git Hub</h3>
                                <p>Veja todos os meus projetos com o código-fonte e tudo mais!</p>
                            </div>
                        </CardContent>
                    </Tilt>
                </Card>
                <Card>
                    <Tilt style={tiltStyle} options={options}>
                        <CardContent>
                            <img src="https://cdn-icons-png.flaticon.com/512/81/81609.png"/>
                            <div>
                                <h3>Twitter</h3>
                                <p>Todas as minhas postagens recentes sobre qualquer coisa que vier!</p>
                            </div>
                        </CardContent>
                    </Tilt>
                </Card>
                <Card>
                    <Tilt style={tiltStyle} options={options}>
                        <CardContent>
                            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
                            <div>
                                <h3>Instagram</h3>
                                <p>Minhas fotos e alguns vídeos de lugares e eventos bacanas!</p>
                            </div>
                        </CardContent>
                    </Tilt>
                </Card>
                <Card>
                    <Tilt style={tiltStyle} options={options}>
                        <CardContent>
                            <img src="https://cdn-icons-png.flaticon.com/512/4423/4423460.png"/>
                            <div>
                                <h3>Twitch</h3>
                                <p>Live vários dias diferentes 20:00hrs! Vai lá!</p>
                            </div>
                        </CardContent>
                    </Tilt>
                </Card>
                <Card>
                    <Tilt style={tiltStyle} options={options}>
                        <CardContent>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png"/>
                            <div>
                                <h3>Discord</h3>
                                <p>A melhor forma de falar comigo!</p>
                            </div>
                        </CardContent>
                    </Tilt>
                </Card>
            </Container>
        </MainThree>
    )
}