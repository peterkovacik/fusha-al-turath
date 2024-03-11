import React from "react";
import {Link} from "gatsby";

const Index = () => {
    return (
        <div>
            <h1>My Landing Page</h1>
            <p>This is my landing page.</p>
            <br />
            <p>Links</p>
            <ul>
                <li><Link to="/about">About</Link></li>                
                <li><Link to="/404">Wrong page!</Link></li>
                <li><Link to="/blog/my-first-post">My First Post</Link></li>
            </ul>
        </div>
    )
}
export default Index;