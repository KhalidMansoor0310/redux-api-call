import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductComponent() {
    const products = useSelector(state => state.allProducts.products)
    // const { id, title } = products[0];
    return (
        <div className="four column wide">
        <div className="ui card">

            <div className="content">
                <a className="header"></a>
                <div className="meta">
                    <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                
                </a>
            </div>
        </div>
        </div>
    )
}
