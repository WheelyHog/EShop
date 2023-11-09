import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss"

const data = [
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1594633313515-7ad9334a2349?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnRzfGVufDB8fDB8fHww",
        title: "Skirt",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus expedita ab animi in harum rem alias voluptatum perspiciatis modi blanditiis!",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Jacket",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus expedita ab animi in harum rem alias voluptatum perspiciatis modi blanditiis!",
        oldPrice: 19,
        price: 12
    },
]

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>Subtotal</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart
