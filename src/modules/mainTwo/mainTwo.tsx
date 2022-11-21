import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './mainTwo.css'

// Bubble
let cords: any = []
let html: any = []
for(let i=0; i<=20; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (95 - 5) + 5), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
for(let i=1; i<=20; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: 'white', animationDuration: `${cords[i].animDuration}s` }}></div>)

export default function mainTwo(props: any){
    const arr1 = [], arr2 = []
    for(let i=0; i<props.repos.length; i++){
        i <= Math.round(props.repos.length)/2?
            arr1.push(props.repos[i]):
            arr2.push(props.repos[i])
    }
    console.log(arr1)
    console.log(arr2)
    

    return(
        <div className="mainTwo" id="mainTwo">
            {html.map((div: any)=>div)}

            <Swiper centeredSlides={true} slidesPerView={'auto'} s>
                    {arr1.map((repo: any)=>{
                        return (
                            <SwiperSlide key={Math.random()}>
                                <h1>{repo.name}</h1>
                                <h3>{repo.description}</h3>
                                <a href={repo.html_url}>Access here</a>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            <h1 className='reposTitle'>Repositórios</h1>
            <Swiper centeredSlides={true} slidesPerView={'auto'} s>
                    {arr2.map((repo: any)=>{
                        return (
                            <SwiperSlide key={Math.random()}>
                                <h1>{repo.name}</h1>
                                <h3>{repo.description}</h3>
                                <a href={repo.html_url}>Access here</a>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    )
}