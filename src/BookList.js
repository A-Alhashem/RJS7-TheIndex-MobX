import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// Components

import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Store
import bookStore from "./stores/BookStore";

class BookList extends Component {
  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = bookStore.filteredBooks;
    let allBooksButton;

    if (bookColor) {
      books = bookStore.filterBooksByColor(bookColor);
      allBooksButton = (
        <Link to="/books">
          <button className="btn">All Books</button>
        </Link>
      );
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar store={bookStore} />
        {allBooksButton}
        <BookTable books={books} />
      </div>
    );
  }
}

export default observer(BookList);
