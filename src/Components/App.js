import React, { Component } from 'react';
import './App.css';
import Books from './Books/Books';

class App extends Component {

  state = {
    books: [
      { name: 'JavaScript', price: 120, id: 1 },
      { name: 'Python', price: 150, id: 2 },
      { name: 'Php', price: 100, id: 3 },
      { name: 'Node-Express', price: 180, id: 4 },
      { name: 'Data Structure', price: 200, id: 5 },
      { name: 'React-Redux', price: 100, id: 6 },
    ],
    booksGet: false
  }

  changeFunc = (event, id) => {///When Change the input value from the bar....
    let newName = this.state.books.map((book) => {
      if (id === book.id) {
        return {
          ...book,
          name: event
        }
      }
      return book
    })

    this.setState({
      books: newName
    })
  }


  removeHandler = (id) => {//To Delete items from list...
    let listUpdate = this.state.books.filter((value) => value.id != id);

    this.setState({
      books: listUpdate,
    })
  }

  getBooksPrice() {//Get Books Total price..
    let output = null;
    if (this.state.booksGet) {//now Added the Price of all books which client buy..
      let sum = 0;
      let items = this.state.books;
      for (let i = 0; i < items.length; i++) {
        sum += items[i].price;
      }

      output = (
        <ul className="py-3">
          <li className="list-group-item">Your Total Price is : $<span className="text-danger font-weight-bold">{sum}</span> Thanks For Buy!</li>
        </ul>);
    }
    return output;
  }

  getBooks() {
    let showBooks = null;

    if (this.state.booksGet) {
      showBooks = this.state.books.map((items, index) => {
        return <li key={index} className="list-group-item d-flex">{items.name}</li>
      })
    }
    return showBooks;
  }



  render() {///Rendering Function of this project...

    return (///Return Poin Main which is in JSX...
      <div className="App">
        <h1 className="display-2 text-light">Welcome To Bookstoll..</h1>
        <Books
          bookList={this.state.books}
          changeFunction={this.changeFunc.bind(this)}
          removeHandler={this.removeHandler.bind(this)}
          get={() => { this.setState({ booksGet: true }) }} />

        <div>
          <ul className="py-1 mt-2">
              { this.getBooks() }
          </ul>
          {this.getBooksPrice()}
        </div>
      </div>
    )
  }

}

export default App;