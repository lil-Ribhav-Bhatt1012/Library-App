import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import BookTable from './components/BookTable';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <BookTable />
      </Container>
    </React.Fragment>
  );
}

export default App;
