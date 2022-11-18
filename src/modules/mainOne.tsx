import './mainOne.css'

export default function mainOne(props: any){
    
    return(
        <div className="mainOne">
                <div className="card">
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
                </div>
        </div>
    )
}