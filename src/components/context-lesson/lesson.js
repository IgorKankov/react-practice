// import React, {Component} from 'react'
//
// const LevelThree = ({title}) => <h1>{title}</h1>
// const LevelTwo = ({title}) => <LevelThree title={title}/>
// const LevelOne = ({title}) => <LevelTwo title={title}/>
//
// class Lesson extends Component {
//   render() {
//     return (
//       <LevelOne title={'simple-title'}/>
//     )
//   }
// }
// export default Lesson;

import React, {Component, Fragment} from 'react'
import LevelOne from "./level-one";

export const TitleContext = React.createContext();

class Lesson extends Component {
  constructor() {
    super();
    this.state = {
      title: "default",
      subtitle: "default",
      onFocus: false,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.inputOnFocus = this.inputOnFocus.bind(this)
  }
  inputOnFocus(event){
    const target = event.target
    this.setState({
      onFocus: true,
      title: "",
      subtitle: "",
    })
  }

  handleTitleChange(event){
    event.stopPropagation();
    const target = event.target;
    this.setState({
      title: target.value,
    })
  }

  handleSubtitleChange(event){
    event.stopPropagation()
    const target = event.target
    this.setState({
      subtitle: target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Now ${this.state.title} is your app title, and it means that it is ${this.state.subtitle}` );
  }

  render() {
    const {title, subtitle} = this.state;
    return (
      <TitleContext.Provider value={{
        title: title, subtitle: subtitle, click: () => {
          console.log('HELLO!!')
        }
      }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input name="title" type="text" value={title} onFocus={this.inputOnFocus} onChange={this.handleTitleChange} />
          </label>
          <label>
            Sub Title:
            <input name="sub title" type="text" value={subtitle} onFocus={this.inputOnFocus} onChange={this.handleSubtitleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <LevelOne/>
      </TitleContext.Provider>
    )
  }
}

export default Lesson;