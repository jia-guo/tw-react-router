import { Component } from 'react';
import RouterContext from './RouterContext';

export default class Redirect extends Component {
  static contextType = RouterContext;
  componentDidMount() {
    this.context.history.replace(this.props.to);
  }
  render() {
    return null;
  }
}
