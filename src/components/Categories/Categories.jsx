import React from 'react';
import "./categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <button>
                        <Link to={"/products/1"} className='link'>Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <button>
                        <Link to={"/products/1"} className='link'>New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <button>
                        <Link to={"/products/1"} className='link'>Women</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                            <button>
                                <Link to={"/products/1"} className='link'>Men</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                            <button>
                                <Link to={"/products/1"} className='link'>Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
                    <button>
                        <Link to={"/products/1"} className='link'>Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
