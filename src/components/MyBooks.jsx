import React, {useState, useEffect} from "react";
import BookList from "./BookList.jsx";

/**
 * This page shows all the favorite books of the user after added
 * @returns a page that contains all favorite books of user
 */
const MyBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  // SAVE TO LOCAL STORAGE
  const saveToLocalStorage = (items) => {
		localStorage.setItem('book-favorites', JSON.stringify(items));
	};

  // REMOVE A BOOK FROM LOCAL STORAGE
  const removeFavoriteBook = (book) => {
		const newFavoriteList = favoriteBooks.filter(
			(favorite) => favorite.id !== book.id
		);

    setFavoriteBooks(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  // RETRIEVE BOOKS FROM LOCAL STORAGE
  useEffect(() => {
		const bookFavorites = JSON.parse(
			localStorage.getItem('book-favorites')
		);

		if (bookFavorites) {
			setFavoriteBooks(bookFavorites);
		}
	}, []);

  return (
      <div>
      
        <div className="list" style={{display: "inline-flex", justifyContent: "center", width: "100%", marginTop: "30px"}}>
          <i className="fas fa-book-reader fa-3x"></i>
          <h1 style={{marginLeft: "20px" }}>MY BOOKS</h1>
        </div>

        <BookList books = {favoriteBooks} handleFavClick={removeFavoriteBook} change={"Remove"}/> 
      
      </div>
    );
}

export default MyBooks;