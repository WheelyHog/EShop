import React, { useState } from 'react';
import "./products.scss";
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='2' value={2} />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='3' value={3} />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter By Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort("asc")} />
                        <label htmlFor="asc">Lowest First</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort("desc")} />
                        <label htmlFor="desc">Highest First</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" className='catImg' alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Products
