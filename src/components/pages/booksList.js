"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from '../../components/pages/bookItem';
import BooksForm from '../../components/pages/booksForm';
import Cart from '../../components/pages/cart';

  class BooksList extends React.Component{

    constructor() {
      super();
      this.state = {
        search: ''
      };
    }
    componentDidMount(){ this.props.getBooks()}
    render(){
      const booksList = this.props.books.map(function(booksArr){
        return(
          
          <Col xs={12} sm={6} md={4} key={booksArr._id}>
              <BookItem _id= {booksArr._id}
                        title={booksArr.title}
                        description={booksArr.description}
                        images={booksArr.images}
                        price={booksArr.price}/>
          </Col>
        )
      })
      return(
        <Grid>
         <Row>
             <Carousel>
             <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="/images/homepage1.jpeg" />
              <Carousel.Caption>
                <h3>Decouvrez le monde des pirates avec Luffy et ses amis !</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x300" src="/images/homepage2.jpeg" />
              <Carousel.Caption>
                <h3>Kamehamehaa !</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         </Row>
          <Row>
            <Cart />
          </Row>
          <Row style={{marginTop: '15px'}}>
            {booksList}
          </Row>
        </Grid>


      )
    }
}

function mapStateToProps(state){
  return{
    books: state.books.books
        }
    }
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks:getBooks
    }, dispatch)
    }
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
