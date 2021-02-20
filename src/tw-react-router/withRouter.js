import React from 'react';
import RouterContext from './RouterContext';

export default function withRouter(WrappedComponent) {
  return (props) => (
    <RouterContext.Consumer>
      {(context) => <WrappedComponent {...context} {...props} />}
    </RouterContext.Consumer>
  );
}
