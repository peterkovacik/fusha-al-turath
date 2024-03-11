import React from "react";
import {Link} from "gatsby";

const WrongPage = () => {
    return (
        <div>
            <h1>My 404 Page</h1>
            <p>This is my 404 page.</p>
            <Link className="link" to="/">Take me home</Link>
        </div>
    )
}
export default WrongPage