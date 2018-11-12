"use strict"
//Book reducers
export function booksReducers(state={
  books:[]
}, action){
  switch(action.type){
    case "GET_BOOKS":
    return {...state, books:[...action.payload]}
    break;
    case "POST_BOOK":
    return {...state, books:[...state.books, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}
    break;
    case "POST_BOOK_REJECTED":
    return {...state, msg:'Please, try again', style:'danger', validation:'error'}
    break;
    case "RESET_BUTTON":
    return {...state, msg:'Save book', style:'primary',validation:'null'}
    break;
    case "DELETE_BOOK":
    const currentBookToDelete = [...state.books]
    const indexToDelete =
currentBookToDelete.findIndex(
  function(book){
    return book._id == action.payload;
  }
)
//use slice to remove the book at the specified index
  return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
  break;
  case "UPDATE_BOOK":
  const currentBookToUpdate = [...state.books]
  const indexToUpdate =
currentBookToUpdate.findIndex(
function(book){
  return book._id === action.payload._id;
}
)
//use slice to remove the book at the specified index
const newBookToUpdate = { ...currentBookToUpdate[indexToUpdate], title: action.payload.title
}
// This Log has the purpose to show you
//how newBookToUpdate looks like
console.log("what is it newBookToUpdate", newBookToUpdate);
//use slice to remove the book at the
//specified index, replace with the new object
//and concatenate witht he rest of items in the
//array
  return {books:
    [...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
  break;
}
  return state
}
