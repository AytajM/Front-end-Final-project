import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <><div className="notPage">
      <img src="./images/A-404-Page.jpg" alt="Page Not Found"  />
    </div>
    
    <><button className="home"><Link to = "/">  Go back to the home page</Link></button></></>
    
  );
}

export default NotFound;
