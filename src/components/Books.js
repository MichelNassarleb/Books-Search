import React from 'react'
import Book from './Book'
import Pagination from './Pagination'
const Books = ({books}) =>{

    return(<div>

        <div className='book-container'>
            {books ? books.map((book,index)=>{
                return <Book book={book} key={index} />
            }):<p>Make sure you have entered the full author name! Could have been few more letters! Or Invalid author name!</p>}

       
        </div>
     
        </div>
    )
}


export default Books;