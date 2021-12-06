import React from "react"
import Carousel from "react-elastic-carousel"

function CarouselComponent() {
    var items= [
        { id: 1, title: 'item #1', img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984273547-home-sliderdesktop1.jpg" },
        { id: 2, title: 'item #2', img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984306064-home-sliderdesktop.jpg" },
        { id: 3, title: 'item #3', img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984391643-home-sliderdesktop1.jpg" },
        { id: 4, title: 'item #4', img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984430088-home-sliderdesktopcupom.jpg" }
    ]
    return (
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={1500} className="carro">
            {items.map(item => <div key={item.id}>
                <img src={item.img} alt="" width="100%" height="300px"/>

            </div>)}
        </Carousel>
    )
}

export default CarouselComponent