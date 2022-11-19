import './mainOne.css'

export default function mainOne(props: any){
    const options = {
        speed: 100,
        max: 4
    }
    const { Tilt } = props
    
    return(
        <div className="mainOne">
                <Tilt className="card" options={options}>
                    <div className="profilePic">
                        <img src={props.userImg}/>
                    </div>
            
                    <div className="info">
                        <h1 className="title">{props.userName}'s portfolio</h1>
                        <h3>{props.userBio}</h3>
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