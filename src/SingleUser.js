import React from 'react'

const SingleUser = (props) => {
  return (
    <div>
        <ul>
            <li>{props.items.name}</li>
            <li>{props.items.username}</li>
            <li>{props.items.email}</li>
            <button>Delete</button>
        </ul>
        <hr />
    </div>
  )
}

export default SingleUser
