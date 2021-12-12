import React from "react"
import Carousel from "react-elastic-carousel"

function CarouselComponent() {
    var items= [
        { id: 1, title: 'item #1', img: "https://i.imgur.com/slZOsCg.jpg" },
        { id: 2, title: 'item #2', img: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 3, title: 'item #3', img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984391643-home-sliderdesktop1.jpg" },
        { id: 4, title: 'item #4', img: "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1635984430088-home-sliderdesktopcupom.jpg" }
    ]
    return (

        
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={1500} className="carro">
            {items.map(item => <div key={item.id}>
                <img src={item.img} alt="" width="600" height="300"/>

            </div>)}
        </Carousel>

    )
}

export default CarouselComponent