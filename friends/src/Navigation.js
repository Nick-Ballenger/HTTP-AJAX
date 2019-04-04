import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <Link className="link" to='/'>Form</Link>
      <Link className="link" to='/friends'>Friends List</Link>
    </nav>
  );
}

export default Navigation;