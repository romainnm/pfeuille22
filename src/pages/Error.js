import React from "react";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <main>
      <div className="error-page">
        <h1>Page Not Found</h1>
        <h2>Nothing to see here ;)</h2>
        <Link to="/" className="btn">Go back to Home page</Link>
      </div>
    </main>
  );
};

export default Error;
