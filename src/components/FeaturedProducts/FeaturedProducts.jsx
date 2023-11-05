import React from 'react';
import "./featuredProducts.scss";
import Card from '../Card/Card';

const data = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hpcnR8ZW58MHx8MHx8fDA%3D",
        img2: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1594633313515-7ad9334a2349?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnRzfGVufDB8fDB8fHww",
        title: "Skirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Jacket",
        oldPrice: 19,
        price: 12
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww",
        title: "Hat",
        oldPrice: 19,
        price: 12
    },
]

const FeaturedProducts = ({ type }) => {
    return (
        <div className='featured'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, error. Tenetur, numquam nam officia tempora voluptas ad nihil? Voluptate laborum sit quaerat? Inventore rerum vel dolores ipsum quae aliquid quasi?</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
