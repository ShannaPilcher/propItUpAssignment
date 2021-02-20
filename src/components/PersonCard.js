import React, { Component } from 'react';

const PersonCard = props => {
    return (
        <div>
            <h1>{ props.lastName }, {props.firstName}</h1>
            <p>Age: {props.age} </p>
            <p>Hair Color: {props.hairColor} </p>
        </div>
    );
}





//Class component version of prop-it-up assignment
/*    class PersonCard extends Component {
        constructor (props){
            super(props);
            this.state = {
            age: this.props.age
            }
        }
        birthday = () =>{
            this.setState({ 'age': this.state.age + 1})
        }
        render (){
            const {firstName, lastName, hairColor} = this.props;
            return(
                <div>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={ this.birthday }>Birthday Button for {firstName} {lastName}</button>
                </div>
            )
        }
    }
*/

export default PersonCard;
