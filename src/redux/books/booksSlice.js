import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lMSi2kI7vwxiICUE8RTk/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(myAPI);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books.');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(myAPI, book);
    return response.data;
  } catch (error) {
    throw Error('Failed to add book.');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  try {
    await axios.delete(`${myAPI}/${itemId}`);
    return itemId;
  } catch (error) {
    throw Error('Failed to remove book.');
  }
});

const initialState = [];

const handleFetchBooksFulfilled = (state, action) => action.payload;

const handleAddBookFulfilled = (state, action) => {
  state.push(action.payload);
};

function handleRemoveBookFulfilled(state, action) {
  return state.filter((book) => book.itemId !== action.payload);
}

const extraReducers = (builder) => {
  builder
    .addCase(fetchBooks.fulfilled, handleFetchBooksFulfilled)
    .addCase(addBook.fulfilled, handleAddBookFulfilled)
    .addCase(removeBook.fulfilled, handleRemoveBookFulfilled);
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers,
});

export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
