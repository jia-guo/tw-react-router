import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

export default function About({ match }) {
  // const [count, setCount] = useState(0);
  return (
    <p>
      {match ? 'Some detailed descriptions on About page ' : 'Brief about '} <DeeplyNestedChild />
    </p>
  );
}

const DeeplyNestedChild = withRouter(({ location }) => <span>{location.pathname}</span>);
