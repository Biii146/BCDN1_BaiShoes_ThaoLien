import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor:"black"}}>
                    <div className="container">
                        <a className="navbar-brand text-light" style={{fontSize:"26px"}}>Shoes Shop</a>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

