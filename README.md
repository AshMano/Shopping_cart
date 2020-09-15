# Shopping_cart

## Table of Contents
- [Description](#Description)
- [Example](#Example)
- [Technologies Used](#Technologies_Used)

## Description
Shopping_cart is a shopping cart web application where you can buy a wonderful selection of books.


## Example
```js
// POST A BOOK
export function postBooks(book){
  return function(dispatch){
    axios.post("/api/books", book)
      .then(function(response){
        dispatch({type:"POST_BOOK", payload:response.data})
})
      .catch(function(err){
        dispatch({type:"POST_BOOK_REJECTED", payload:"there was an error while posting a new book"})
      })
    }
  }
  
 // DELETE A BOOK
export function deleteBooks(id){
  return function(dispatch){
    axios.delete("/api/books/" + id)
      .then(function(response){
        dispatch({type:"DELETE_BOOK", payload:id})
      })
      .catch(function(err){
        dispatch({type:"DELETE_BOOK_REJECTED", payload:err})
      })
    }
}
```


## Technologies Used
- __React.js__ 
- __Node.js__ 
- __MongoDB__ 
- __Bootstrap__ 
- __HTML5__ 
- __CSS3__ 
