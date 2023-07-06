import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BookService from '../services/BookService';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BookTable() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveBooks();
  }, []);

  const retrieveBooks = () => {
    BookService.getBooks()
      .then(response => {
        setBooks(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Publisher</TableCell>
            {/* Add more table cells here based on your API response structure */}
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.publisher}</TableCell>
              {/* Add more table cells here based on your API response structure */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
