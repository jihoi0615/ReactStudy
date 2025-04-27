// src/components/Navbar.jsx
import React from "react";

const Title = ({ backLink = "", children }) => {
  if (backLink) {
    return (
      <>
        <a href=""></a>
        <h1>{children}</h1>
      </>
    );
  }
  return <h1>{children}</h1>;
};

export default Title;
