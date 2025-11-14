import React, {useState} from "react";
import Header from "./Header.jsx";
import PaginationPage from "./PaginationComponent.jsx";
import BookList from "./BookList.jsx";
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * This is the main lading page that contains the header and list of books searched by user
 * @returns main / home page when first opened
 */
const Home = () => {

  // CREATE AND INITIALIZE VARIABLES
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [sort, setSort] = useState("Sort");
  const [error, setError] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBookList, setShowBookList] = useState(false);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const numberPages = Math.floor(totalItems / 40);
  const [sortedBooks, setSortedBooks] = useState([]);

  // CLEAN DATA FETCHED
  const cleanData = (data) => {
    if (!data.items) return []; // safe fallback
    const cleanedData = data.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false){
        book.volumeInfo['publishedDate'] = '0000';
      } 
      
      if (book.volumeInfo.hasOwnProperty('imageLinks') === false){
        book.volumeInfo['imageLinks'] = {thumbnail: 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'};
      }

      if (book.volumeInfo.hasOwnProperty('averageRating') === false){
        book.volumeInfo['averageRating'] = "N/A";
      } 
      if (book.volumeInfo.hasOwnProperty('description') === false){
        book.volumeInfo['description'] = "N/A";
      }
      if (book.volumeInfo.hasOwnProperty('publisher') === false){
        book.volumeInfo['publisher'] = "N/A";
      }
      return book;
    })

    return cleanedData;
  } 

  // HANDLE SEARCH
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  }

  // MAIN SEARCH FUNCTION
  const searchBook = async (e) => {
    e.preventDefault();
  
    setSort('');
    setCurrentPage(1);
   
    if (searchField) // When there's a keyword entered
    {
      const startIndex = 0;
      const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
      const data = await api_call.json();
      // const data = callApi(0);
      console.log(data);
      const cleanedData = cleanData(data);

      setBooks(cleanedData);
      setError('');
      setTotalItems(data.totalItems);
      setShowBookList(true);
      sortBooks(e);
    } 
    else // when there's no keyword entered
    {
      setBooks([]);
      setSearchField('');
      setError("Please enter a keyword to search!");
      setTotalItems(0);
      setShowBookList(false);
    }
  }

  // HANDLE SORT
  const handleSort = (e) => {
    sortBooks(e);
    setSort(e.target.value);
  }

  // MAIN SORT FUNCTION
  const sortBooks = (e) => {
    e.preventDefault();

    setSortedBooks(
      books.sort((a, b) => {
        if (sort === 'Newest') {
          // substring 0 - 4 is grasping the year
          return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
        } else if  (sort === 'Oldest') {
         return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
        } else {
         return 0;
        }
      })
    );
    console.log (sortedBooks);
  }

  // HANDLE CLICKING ANOTHER NUMBERED PAGE
  const handleNextPage = async (pageNumber) => {
    const startIndex = (pageNumber - 1) * 40;
    // const data = callApi(startIndex);
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&startIndex=${startIndex}&maxResults=40&key=AIzaSyCj9AcXnkPD-UdHuWczVChDugfTjzi7w60`);
    const data = await api_call.json();
    console.log(data);
    const cleanedData = cleanData(data);

    setBooks(cleanedData);
    setError('');
    setCurrentPage(pageNumber);
  }

  // SAVE FAVORITE LIST TO LOCAL STORAGE
  const saveToLocalStorage = (items) => {
		localStorage.setItem('book-favorites', JSON.stringify(items));
	};

  // ADD A BOOK TO THE LIST OF FAVORITE BOOKS IN LOCAL STORAGE
	const addFavoriteBook = (book) => {
		const newFavoriteList = [...favoriteBooks, book];
    setFavoriteBooks(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  return(
      <div className="App">
        <div className = "Books">
          <Header searchBook={searchBook} handleSearch={handleSearch} handleSort={handleSort} error={error}/> 
          {showBookList === true ? <h2 style={{textAlign : "center", paddingTop : "50px"}}>Search Results</h2> : '' }
          {searchField !== '' ? <BookList books = {books} handleFavClick={addFavoriteBook} change={'add'} /> : ''}
          {totalItems > 40 ? <PaginationPage pages={numberPages} currentPage = {currentPage} nextPage={handleNextPage}/> : ''}
        </div>
      </div>
  );
};

export default Home;
