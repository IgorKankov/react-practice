import React, {Component} from 'react'
import '../sass/spinner.scss'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const isEmpty = (prop) => (
  prop === null || prop === undefined || (prop.hasOwnProperty('length') && prop.length === 0) || (prop.constructor === Object && Object.keys(prop).length === 0)
);

function spinner() {
  return (<div className="spinner">
    <span className="spinner-inner-1"></span>
    <span className="spinner-inner-2"></span>
    <span className="spinner-inner-3"></span>
  </div>)
};

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ? spinner() : <WrappedComponent {...this.props}/>
    }
  }
}
export default LoadingHOC;