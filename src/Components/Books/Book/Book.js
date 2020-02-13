import React from 'react';
import './Book.css';

class Book extends React.Component {

    state = {
        isInputBar: false,
    }

    onPressFunction(press){
        if(press === 'Enter'){
            this.setState({
                isInputBar: false
            })
        }
    }

    render() {

        let barOrText = this.state.isInputBar ?
            <input type="text" placeholder="Type Your Value" value={this.props.books.name} className="input-control"
                onChange={(event) => { this.props.changeFunc(event.target.value, this.props.books.id) }}
                onKeyPress={(press) => { this.onPressFunction(press.key) }}
                onBlur={() => { this.setState({isInputBar: false}) }} />
            :
            <p className="text">{this.props.books.name}</p>;


        return (
            <li className="list-group-item d-flex">
                {barOrText}
                <span className="ml-auto">${this.props.books.price}</span>

                <div className="icons">
                    <span className="pl-2" onClick={() => this.setState({isInputBar: true})}>
                        <span classname="d-inline-block" tabIndex={0} data-toggle="tooltip" title="Edit items">
                            <i className="fa fa-edit"></i>
                        </span>
                    </span>

                    <span className=" p-1 pl-3" onClick={() => { this.props.remover(this.props.books.id) }}>
                        <span className="d-inline-block" tabIndex={0} data-toggle="tooltip" title="Remove">
                            <i className="fa fa-trash"></i>
                        </span>
                    </span>
                </div>
            </li>
        )
    }
}

export default Book;