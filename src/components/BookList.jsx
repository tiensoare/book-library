import React from 'react';
import BookCard from './BookCard.jsx';

/**
 * This will shows all the book when a user search or when user enters "MyBooks" page
 * @param {*} props list of books from any page calling it
 * @returns a book list displayed in formatted row/col
 */
const BookList = (props) => {
    return(
            <div className="list row">
                {
                    props.books.map((book, i) => {
                        return (
                            <div className="bookCard-col col-lg-3 col-md-4 col-sm-6" key={i}>
                                <BookCard 
                                    book={book}
                                    change={props.change}
                                    handleFavClick = {props.handleFavClick}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    title={book.volumeInfo.title}
                                    publishedDate={book.volumeInfo.publishedDate}
                                    authors={book.volumeInfo.authors}
                                    previewLink= {book.volumeInfo.previewLink}
                                    publisher= {book.volumeInfo.publisher}
                                    length={book.volumeInfo.pageCount}
                                    isbn={book.volumeInfo.industryIdentifiers}
                                    categories={book.volumeInfo.categories}
                                    description={book.volumeInfo.description}
                                    rating={book.volumeInfo.averageRating}
                                />      
                            </div>                                                 
                        );
                    })
                }
            </div>
    )
}

export default BookList;