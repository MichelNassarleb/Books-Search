import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const Book = ({book})=>{
  
   
    const bookDetails = book.volumeInfo
    const redirect= () =>{
      window.location.href=`${book.accessInfo.epub.downloadLink}`
    
     }
     const authors = bookDetails.authors


    return(
              
            <div>
              <Link to ={`/authorsearch/bookdetails/${book.id}`}
              
              className='book-sec'>
<div className='book-img'>
{book.volumeInfo.imageLinks.thumbnail && <img src={book.volumeInfo.imageLinks.thumbnail} alt="book picture" />}
</div>
<div className='book-info'>
{bookDetails.title.length ? <h3>Title: {bookDetails.title.length > 50 ? `${bookDetails.title.substring(0,50)}...` : `${bookDetails.title}`}</h3> : ''}
{bookDetails.pageCount ? <p>Pagecount: {bookDetails.pageCount}</p> : ''}

<p>Authors: {authors && authors.slice(0,3).map((author,index)=>{
return(<span key = {index}>{author},</span>)
})}</p>


{bookDetails.publisher ? <p>Publisher:{bookDetails.publisher}</p> : ''}
{bookDetails.publishedDate ? <p>Published Date:{bookDetails.publishedDate}</p> : ''}
{bookDetails.ratingCount ? <p>Ratings Count: {bookDetails.ratingCount}</p> : ''}
{bookDetails.averageRating ? <ReactStars
count={5}
value={bookDetails.averageRating}

size={12}
activeColor="#ffd700"
/> : <p>There's no rating for this book!</p>}
<button onClick ={()=>redirect()}>Download</button>
</div>
</Link>
                </div>      
    )
}
{/* <a href=`${bookDetails.previewLink}` className='book-sec'>
<div className='book-img'>
<img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
</div>
<div className='book-info'>
{bookDetails.title.length ? <h3>Title: {bookDetails.title.length > 50 ? `${bookDetails.title.substring(0,50)}...` : `${bookDetails.title}`}</h3> : ''}
{bookDetails.pageCount ? <p>Pagecount: {bookDetails.pageCount}</p> : ''}

<p>Authors: {authors && authors.slice(0,3).map((author,index)=>{
return(<span key = {index}>{author},</span>)
})}</p>


{bookDetails.publisher ? <p>Publisher:{bookDetails.publisher}</p> : ''}
{bookDetails.publishedDate ? <p>Published Date:{bookDetails.publishedDate}</p> : ''}
{bookDetails.ratingCount ? <p>Ratings Count: {bookDetails.ratingCount}</p> : ''}
{bookDetails.averageRating ? <ReactStars
count={5}
value={bookDetails.averageRating}

size={12}
activeColor="#ffd700"
/> : <p>There's no rating for this book!</p>}
<button onClick ={()=>redirect()}>Download</button>
</div>
</a>
  <Link to ={`/authorSearch/${book.id}`} className='book-sec'>
                <div className='book-img'>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                </div>
                <div className='book-info'>
                {bookDetails.title.length ? <h3>Title: {bookDetails.title.length > 50 ? `${bookDetails.title.substring(0,50)}...` : `${bookDetails.title}`}</h3> : ''}
                {bookDetails.pageCount ? <p>Pagecount: {bookDetails.pageCount}</p> : ''}

                  <p>Authors: {authors && authors.slice(0,3).map((author,index)=>{
    return(
    <span key = {index}>{author},</span>)
          })}
          </p>

 
               {bookDetails.publisher ? <p>Publisher:{bookDetails.publisher}</p> : ''}
               {bookDetails.publishedDate ? <p>Published Date:{bookDetails.publishedDate}</p> : ''}
               {bookDetails.ratingCount ? <p>Ratings Count: {bookDetails.ratingCount}</p> : ''}
                {bookDetails.averageRating ? <ReactStars
                                              count={5}
                                               value={bookDetails.averageRating}
 
                                               size={12}
                                               activeColor="#ffd700"
                                               /> : <p>There's no rating for this book!</p>}
               <button onClick ={()=>redirect()}>Download</button>
               </div>
               </Link> */}

export default Book;