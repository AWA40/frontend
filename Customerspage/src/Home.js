import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div>
            <p>
            Welcome to home :D paina nappia alaalta
            </p>
            <Link to= "secondview"> <button>Go to secondview</button> </Link>
        </div>
    )
}
