import React, { Component } from 'react';
import './Modal.js'
import './style.css'

export default class ShoesItem extends Component {
    render() {
        let {item,detail} = this.props
        return (
            <div className="card">
                <img src={item.image} className="card-img-top w-100" alt="..."/>
                <div className="card-body">
                    <p className="card-title">{item.name}</p>
                    <p className="card-text font-weight-bold">{item.price}$</p>
                    <a className="shoes-info"> 
                        <button className="modal-cart" type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                            detail(item)
                        }}>More detail</button>
                    </a>
                </div>
            </div>
        )
    }
}
