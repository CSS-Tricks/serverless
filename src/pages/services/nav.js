import React from "react";
import { Link } from "gatsby";

const ServicesNav = () => {
  return (
    <nav>
      <Link to="services/auth">Auth</Link>
      <Link to="services/cmss">CMSs</Link>
    </nav>
  );
};

export default ServicesNav;
