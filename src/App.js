import React from 'react'
import './App.css'
import proPic from './propic.jpg'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fullName: 'hana',
      bio: 'student',
      imgSrc: <img src={proPic} alt="" />,
      profession: 'web developpement student',
      shows: true,
      secondss: 0,
    }
  }
  changeShows = () => {
    this.setState({ shows: !this.state.shows })
  }
  time = () => this.setState({ secondss: this.state.secondss + 1 })
  componentDidMount() {
    setInterval(this.time, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.shows === true ? (
          <div>
            <p className="nimage">{this.state.imgSrc}</p>
            <p>Fullname: {this.state.fullName}</p>
            <p>Bio : {this.state.bio}</p>
            <p>Profession : {this.state.profession}</p>
          </div>
        ) : (
          <div></div>
        )}
        <button onClick={this.changeShows}>
          {this.state.shows ? 'Hide' : 'Show'}
        </button>
        <h2>{this.state.secondss}</h2>
      </div>
    )
  }
}

export default App
