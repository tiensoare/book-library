# Book Library

A React-based web application that allows users to search, browse, and save their favorite books using the Google Books API. Built with **Vite** for fast development, **Bootstrap** for styling, and supports pagination, sorting, and local storage of favorite books.

---

## Features

- Search for books by keyword using the Google Books API.  
- View book details including title, author, publisher, publication date, description, categories, page count, and rating.  
- Sort search results by newest or oldest.  
- Pagination for navigating through multiple search result pages.  
- Save favorite books to local storage for later reference.  
- Responsive UI using Bootstrap for desktop and mobile.  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tiensoare/book-library.git
cd book-library
````

2. Install dependencies:

```bash
npm install
```

3. Add your Google Books API key in `Home.jsx` (replace the placeholder key if needed):

```javascript
const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&startIndex=${startIndex}&maxResults=40&key=YOUR_API_KEY`);
```

---

## Running the App

Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or the URL shown in the terminal).

The app supports **hot module replacement**, so changes you make in `src/` will update automatically.

---

## Building for Production

```bash
npm run build
```

This generates a `dist/` folder ready for deployment.

---

## Usage

* Type a keyword in the search input and press enter or click the search button.
* Use the dropdown to sort results by **Newest** or **Oldest**.
* Click page numbers at the bottom to navigate through results.
* Click the heart icon on a book to save it to your **My Books** list.

---

## Dependencies

* React 18+
* Vite 4+
* Bootstrap 5
* react-router-dom (for routing)
* styled-components (for styling reusable components)
* react-icons (for icons)

---

## License

This project is licensed under the MIT License.