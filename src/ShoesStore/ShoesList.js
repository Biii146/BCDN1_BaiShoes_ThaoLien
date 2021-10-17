import React, { Component } from 'react'
import ShoesItem from './ShoesItem'
import ShoesData from './ShoesData.json'
import './style.css'

export default class ShoesList extends Component {
    renderShoesList = () => {
        let {seeDetail} = this.props;
        return ShoesData.map((shoes,index) => {
            return <div className="col-4 mt-3">
            <ShoesItem item={shoes} detail={seeDetail}/>
            </div>
        })
        
    }
    
    render() {
        return (
            <div className="row">
                <div className="shoe-type col-2 mt-3">
                <div className="shoes-brand p-3">
                    <div className="nav flex-column nav-pills text" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-adidas-tab" data-toggle="pill" href="#v-adidas-home" role="tab">Adidas</a>
                        <a className="nav-link" id="v-pills-nike-tab" data-toggle="pill" href="#v-pills-nike" role="tab">Nike</a>
                        <a className="nav-link" id="v-pills-balance-tab" data-toggle="pill" href="#v-pills-balance" role="tab">New Balance</a>
                        <a className="nav-link" id="v-pills-puma-tab" data-toggle="pill" href="#v-pills-puma" role="tab">Puma</a>
                    </div>
                </div>
                </div>
                
                <div className="mx-auto col-9 mb-5">
                    <div className="row">
                        {this.renderShoesList()}
                    </div>
                </div>
            </div>
        )
    }
}
