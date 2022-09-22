import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-black bg-black" style={{ marginBottom: 20 }}>
      <a className="navbar-brand" href="#">
        <img
          className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt="logo"
        />
      </a>
    </nav>
  );
};

export default Navbar;
