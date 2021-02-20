import React, { Component } from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { location } = context;
          const { computedMatch, path, children, component, render } = this.props;
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, path)
            : context.match;
          const props = { ...context, location, match };

          return (
            <RouterContext.Provider value={props}>
              {match
                ? children
                  ? typeof children === 'function'
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === 'function'
                ? children(props)
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
