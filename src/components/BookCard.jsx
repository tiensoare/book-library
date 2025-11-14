import * as React from "react";
import { Button, Card } from "react-bootstrap";
import BookDetail from "./BookDetail.jsx";

/**
 * 
 * @param {*} props a single book extracted from the book list and other functions
 * @returns a card that shows all the information of a book
 */
const BookCard = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Card border="light" style={{ width: '18rem' }} className="card-container">
            <Card.Img variant="top" src={props.image} className="book-image" onClick={() => setModalShow(true)}/>
            <Card.Body>
                <>
                    <Button variant="outline-dark" size = "sm" className="btn addBtn" onClick={() => props.handleFavClick(props.book)}>
                        {props.change === 'add' ? "Add to your list" : "Remove"}
                    </Button>

                    <BookDetail
                        image={props.image}
                        title={props.title}
                        authors={props.authors}
                        publisher={props.publisher}
                        isbn={props.isbn}
                        length={props.length}
                        publishedDate={props.publishedDate}
                        categories={props.categories}
                        description={props.description}
                        rating={props.rating}
                        previewLink={props.previewLink}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            </Card.Body>                
        </Card>
    );
}

export default BookCard;