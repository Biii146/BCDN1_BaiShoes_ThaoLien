import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {producDetail} = this.props;
        return (
            <div>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{producDetail.name}'s Information</h5>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img className="w-75" src={producDetail.image} alt="" />
                                                </td>
                                                <td>{producDetail.shortDescription}</td>
                                                <td>{producDetail.price}$</td>
                                                <td>{producDetail.quantity}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-cart" type="button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
