import React from 'react'
import Book from './Book'
import Pagination from './Pagination'
const Books = ({books,indexBook,setIndexBook,pagination,changeOfStartIndex,totalItems,bookCount}) =>{

    return(<div className='allBooksPage'>

        <div className='book-container'>
            {books ? books.map((book,index)=>{
                return <Book book={book} key={index} />
            }):<p className='not-found-paragraph'>Please make sure you have entered the full author name! Could have been few more letters! Or Invalid author name!</p>}

       
        </div>
        {pagination && <Pagination indexBook={indexBook} bookCount={bookCount} setIndexBook={setIndexBook}
    changeOfStartIndex={changeOfStartIndex} totalItems={totalItems}/> }
    
        </div>
    )
}


export default Books;