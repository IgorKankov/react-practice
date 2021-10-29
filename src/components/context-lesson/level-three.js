import React, {Component, Fragment} from 'react';
import {TitleContext} from "./lesson";

class LevelThree extends Component {

  render() {
    return (
      <TitleContext.Consumer>
        {({title, subtitle, click}) => (
          <Fragment>
            <h1 onClick={click}>{title}</h1>
            <h2>{subtitle}</h2>
          </Fragment>
        )}
      </TitleContext.Consumer>
    )
  }
}

export default LevelThree;