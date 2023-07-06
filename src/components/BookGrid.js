import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import BookService from '../services/BookService';

function BookGrid() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid item key={book.id}>
          <Typography>{book.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default BookGrid;
