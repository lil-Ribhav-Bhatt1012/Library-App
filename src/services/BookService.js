import axios from 'axios';

const API_URL = 'https://api.gyanibooks.com/library/get_dummy_notes';

class BookService {
  getBooks() {
    return axios.get(API_URL);
  }
}

export default new BookService();
