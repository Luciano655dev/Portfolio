import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './mainTwo.css'

// Bubble
let cords: any = []
let html: any = []
for(let i=0; i<=20; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (95 - 5) + 5), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
for(let i=1; i<=20; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: 'white', animationDuration: `${cords[i].animDuration}s` }}></div>)

export default function mainTwo(props: any){
    return(
        <div className="mainTwo" id="mainTwo">
            {html.map((div: any)=>div)}
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 10,
                modifier: 1.5,
                slideShadows: true
            }}
            >
                <div>
                    {props.repos.map((repo: any)=>{
                        return (
                            <SwiperSlide key={Math.random()}>
                                <h1>{repo.name}</h1>
                                <h3>{repo.description}</h3>
                                <a href={repo.html_url}>Access here</a>
                            </SwiperSlide>
                        )
                    })}

                <SwiperSlide>
                    <h1 className="commingSoon"></h1>
                </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
}