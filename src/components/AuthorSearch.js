import React, { useEffect } from 'react'
import Logoutbutton from './Logout'
import Footer from './Footer'
import Search from './Search'
import Books from './Books'
import Pagination from './Pagination'


const AuthorSearch = ({setSignedIn,
   setSignedOut,
   fetchBooks,
   setAuthorName,
   books,
   authorName,
   signedIn,
setBookCount,
setPagination,
clientId,
highValue,
pagination,
bookCount,
indexBook,
setIndexBook,
changeOfStartIndex}) =>{


  return(

   
  
 <div className={highValue ? 'bigpage' : 'fullpage'}>
 
 <div className='google-btn'>
    <Logoutbutton
     setSignedOut={setSignedOut}
       setSignedIn={setSignedIn}
       signedIn={signedIn}
       clientId={clientId}
       />
    </div>
    <div className='search-books-sec'>
       <Search fetchBooks = {fetchBooks}
          setBookCount={setBookCount}
          setAuthorName={setAuthorName}
          setPagination={setPagination}
          authorName={authorName}
         
          bookCount={bookCount}
          />
    {authorName && <Books 
     books={books}
     
    /> 
    }
   
    
  </div>
<div className='footer-sec'>
     {pagination && <Pagination indexBook={indexBook} setIndexBook={setIndexBook}
    changeOfStartIndex={changeOfStartIndex}/> }
<Footer/>
</div>

        </div>
  )
}



export default AuthorSearch;