import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    // console.log(event.target.src)
    // this.props.clickedOption(event.target.value);
    // console.log(this.props.id)
    if (this.props.clickedOption) {
      this.props.clickedOption(this.props.id);
    }
  }
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    )
  }
}

export default Gif;