import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div class="ui menu">
            <div class="header item">
                FakeShop
            </div>
            <Link class="item" to='/productlisting'>
                Products
            </Link>
        </div>
    )
}
