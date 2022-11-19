import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './mainTwo.css'

export default function mainTwo(props: any){
    return(
        <div className="mainTwo" id="mainTwo">
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