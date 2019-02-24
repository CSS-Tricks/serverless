import React from "react";
import { Link } from "gatsby";

const ServicesNav = () => {
  return (
    <nav>
      <Link to="services/auth">Auth</Link>
      <Link to="services/cmss">CMSs</Link>
      <Link to="services/notifications">Notifications</Link>
      <Link to="services/ssgs">Static Site Generators</Link>
    </nav>
  );
};

export default ServicesNav;
