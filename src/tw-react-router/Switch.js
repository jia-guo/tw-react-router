import React, { Component } from 'react';
import matchPath from './matchPath';
import RouterContext from './RouterContext';

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = context.location;
          let element, match;

          React.Children.forEach(this.props.children, (child) => {
            if (match == null) {
              element = child;
              match = child.props.path ? matchPath(location.pathname, child.props) : context.match;
            }
          });

          return match ? React.cloneElement(element, { location, computedMatch: match }) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
