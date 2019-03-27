import React from 'react'

class DogMeme extends React.Component {

    render() {
        return (
        <div>
            <h3>{this.props.text}</h3>
            <img onClick={this.props.handleClick} src={this.props.url} alt={this.props.alt} />
        </div>
        )
    }
}

export default DogMeme