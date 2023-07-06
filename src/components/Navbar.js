import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import BookGrid from './components/BookGrid'; // Import your own BookGrid component
import theme from './theme'; // Import your own theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <BookGrid />
    </ThemeProvider>
  );
}

export default App;
