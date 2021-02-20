import React from 'react';
// import { Link } from "react-router-dom";
import { Link } from '../tw-react-router';

export default function Blog() {
  return (
    <>
      <h2>Blogs</h2>
      <ul>
        <li>
          <Link to='/blog/1'>Blog 1</Link>
        </li>
        <li>
          <Link to='/blog/2'>Blog 2</Link>
        </li>
        <li>
          <Link to='/blog/3'>Blog 3</Link>
        </li>
      </ul>
    </>
  );
}
