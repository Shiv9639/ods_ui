import React from 'react'
import "../assets/css/utilities.css"
const ErrorPage = () => {
  return (
    <div className="container-404">
      <h2 className="h2-404">404</h2>
      <h3 className="h3-404">Oops, nothing here...</h3>
      <p className="p-404">Please Check the URL</p>
      <p className="p-404">
        Otherwise, <a className="a-404" href="/">Click here</a> to redirect to homepage.
      </p>
    </div>
  );
}

export default ErrorPage