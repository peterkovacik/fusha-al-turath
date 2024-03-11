import React from "react";
import {Link} from "gatsby";

const Index = () => {
    return (
        <div>
            <h1>My first blog post</h1>
            <p>This is my first blog post.</p>
            <Link className="link" to="/">Take me home</Link>
        </div>
    )
}
export default Index