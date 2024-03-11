import React from "react";
import {Link} from "gatsby";
const About = () => {
    return (
        <div>
            <h1>My about page</h1>
            <p>This is my about page.</p>
            <Link className="link" to="/">Take me home</Link>
        </div>
    )
}
export default About