import React from "react"

const Card = ({ user }) => {
    return (
        <>
            <div key={user.id}>
            <p>id: {user.id}</p>
            <p>credit: {user.credit}</p>
            <p>cash: {user.cash}</p>
          </div>
        </>
    )
}

export default Card