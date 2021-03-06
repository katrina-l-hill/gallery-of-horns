// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
import { Card } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';

import './HornedBeast.css';

// 2. Name/Declare the class component.
class HornedBeast extends React.Component {
    // Define the class with a render method. The render method should return something.
    // add a state to be able to change a component
    constructor(props) {
        super(props);
        this.state = {
            favorited: 0
        }
    }
    handleImageClick = () => {
        this.setState({
            favorited: this.state.favorited + 1
        });
        this.props.selectBeast({
            title: this.props.title,
            imageUrl: this.props.imageUrl,
            description: this.props.description
        });
    }

    render() {
        return (
            <article>
                <h2 onClick={this.props.openModal}>{this.props.title}</h2>
                <img onClick={this.handleImageClick}
                    src={this.props.imageUrl}
                    alt={this.props.title}
                    title={this.props.description}
                    show={this.state.showModal}
                />
                <p>Click on {this.props.title} if it's your favorite</p>
                <Card>
                    <Card.Body>
                        <p>{ }💚{this.state.favorited}</p>
                    </Card.Body>
                </Card>
                {/* <Card border="primary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <p>{ }💚{this.state.favorited}</p>
                    </Card.Body>
                </Card> */}
            </article>
        )
    }
}

// 3. Export the class.
export default HornedBeast;