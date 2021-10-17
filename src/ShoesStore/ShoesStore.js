import React, { Component } from 'react'
import Header from './Header'
import ShoesList from './ShoesList'
import Modal from './Modal.js'


export default class ShoesStore extends Component {
    state = {
        shoesDetail:{"id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"}
    }
    seeDetail = (newshoes) => {
        this.setState({
            shoesDetail: newshoes
        })
        
    }
    
    render() {
        return (
            <div>
                <Header />
                <div>
                    <ShoesList seeDetail={this.seeDetail}/>
                    <Modal producDetail={this.state.shoesDetail}/>
                </div>
            </div>
        )
    }
}
