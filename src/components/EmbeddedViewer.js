import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmbeddedViewer = ({books,setBooks,filterTheBooks,setFilterTheBooks}) =>{


  const { volumeId } = useParams()
  const filterBookFunc = () =>{
   
    const oneBook = books.filter((book) => book.id === volumeId)
    // setBooks(oneBook)
    setFilterTheBooks(oneBook)
    
    
  }

  useEffect(()=>{
    filterBookFunc()
  
  },[])


 
  return(
    
    <div id="viewerCanvas">
      {filterTheBooks && filterTheBooks.map((book)=><div key={book.id}> <a href={book.volumeInfo.previewLink} className='details-sec'>
<div className='book-img'>
<img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
</div>
<div className='book-info'>
{book.volumeInfo.title.length ? <h3>Title: {book.volumeInfo.title}</h3> : ''}
{book.volumeInfo.pageCount ? <p>Pagecount: {book.volumeInfo.pageCount}</p> : ''}

<p>Authors: {book.volumeInfo.authors && book.volumeInfo.authors.map((author,index)=>{
return(<span key = {index}>{author},</span>)
})}</p>


{book.volumeInfo.publisher ? <p>Publisher:{book.volumeInfo.publisher}</p> : ''}
{book.volumeInfo.publishedDate ? <p>Published Date:{book.volumeInfo.publishedDate}</p> : ''}
{book.volumeInfo.ratingCount ? <p>Ratings Count: {book.volumeInfo.ratingCount}</p> : ''}

</div>
</a>
</div>)}
<Link to = '/authorSearch'>
<button>Back to authorsearch</button> </Link>
</div>  
  )

;}

export default EmbeddedViewer;