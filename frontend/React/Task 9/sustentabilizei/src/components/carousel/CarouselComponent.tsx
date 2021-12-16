import React from "react"
import Carousel from "react-elastic-carousel"

function CarouselComponent() {
    var items= [
        { id: 1, title: 'item #1', img: "https://i.imgur.com/TmfBl9k.png" },
        { id: 2, title: 'item #2', img: "https://i.imgur.com/F3ZZvqP.png" },
        { id: 3, title: 'item #3', img: "https://i.imgur.com/xgPa8xT.png" },
        { id: 4, title: 'item #4', img: "https://i.imgur.com/L52J0ve.png" }
    ]
    return (
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={9000} className="carro">
            {items.map(item => <div key={item.id}>
                <img src={item.img} alt="" width="100%" height="300"/>

            </div>)}
        </Carousel>
    )

}

export default CarouselComponent