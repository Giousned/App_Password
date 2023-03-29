import React from "react";

import { Link } from "react-router-dom";

export const Footer = () => (

  <footer className="footer mt-4 py-3 text-center">

    <Link to="/">
      Back home
    </Link>

    <p>
      Made with <i className="fa fa-heart text-danger mt-3" /> by Nuria & Guille
    </p>
    
  </footer>
);
