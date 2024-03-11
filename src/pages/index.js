import React from "react";
import {Link} from "gatsby";

const Index = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold text-blue-600">
                My Landing Page
            </h1>
            <p>This is my landing page.</p>
            <br />
            <p>Links</p>
            <ul>
                <li><Link className="link" to="/about">About</Link></li>                
                <li><Link className="link" to="/404">Wrong page!</Link></li>
                <li><Link className="link" to="/blog/my-first-post">My First Post</Link></li>
            </ul>
        </div>
    )
}
export default Index;