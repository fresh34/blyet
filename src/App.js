import React from 'react'
import DogMeme from './DogMeme'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      url: "",
      text: "Nyba",
      alt: "Dog meme"
    }
    this.getDogPhoto = this.getDogPhoto.bind(this)
  }

  componentDidMount() {
    this.getDogPhoto()
  }

  getDogPhoto(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( resp  => resp.json() )
    .then( data => this.setState( { url: data.message } ) )
  }

  render(){
    return (
      <div>
        <DogMeme handleClick={this.getDogPhoto} text={this.state.text} alt={this.state.alt} url={this.state.url} />
      </div>
    )
  }
}

export default App