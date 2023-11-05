import React, { useState } from 'react';
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww"
]

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, temporibus nobis. Quibusdam quidem saepe et ipsam harum, vero eos impedit nisi sint similique illum quo doloribus veritatis natus minima consectetur.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon />Add To Cart
                </button>
                <div className="links">
                    <div className="item"><FavoriteBorderIcon />Add To Wishlist</div>
                    <div className="item"><BalanceIcon />Add To Compare</div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product
