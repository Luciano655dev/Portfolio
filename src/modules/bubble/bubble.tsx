import './bubble.css'

export default function createBubbles(props: any){
    const { quantity, bc } = props
    let html = []

    for(let i=1; i<=quantity; i++){
        let x = Math.round(Math.random() * (90 - 5) + 5)
        let y = Math.round(Math.random() * (95 - 5) + 5)
        html.push(<div className="bubble" style={{ left: x, top: `${y}px`, backgroundColor: bc }}></div>)
    }

    return (
        <div>
            {html.map((div: any)=>div)}
        </div>
    )
}