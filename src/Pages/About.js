import React from 'react';
// import { withRouter } from 'react-router-dom';
import { withRouter } from '../tw-react-router';

export default function About({ match }) {
  return (
    <div>
      <p>
        {match
          ? 'Some detailed descriptions on the real about page'
          : 'Brief version on every page'}
      </p>
      <DeeplyNestedChild />
    </div>
  );
}

const DeeplyNestedChild = withRouter(({ location }) => <p>current path: {location.pathname}</p>);
