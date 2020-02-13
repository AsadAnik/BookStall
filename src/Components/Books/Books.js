import React from 'react';
import Book from './Book/Book';

const Books = (props) => {

    return(
        <div className="books">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
          See Books Prices
        </button>

        <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Books & Price</h5>
                <button type="button" className="btn btn-outline-success ml-5" 
                onClick={props.get} data-dismiss="modal">Get</button>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                 <div className="modal-body">
                    { props.bookList.map((valueAndPrice, index) => {
                        return(
                            <Book key={ index } books={valueAndPrice} changeFunc={props.changeFunction}  remover={props.removeHandler} />
                        )
                    }) }
                  </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Books;