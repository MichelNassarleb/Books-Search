import React, { useEffect } from 'react'
import Logoutbutton from './Logout'
import Footer from './Footer'
import Search from './Search'
import Books from './Books'
import Pagination from './Pagination'
import AlertError from './AlertError'


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
changeOfStartIndex,
totalItems,
error}) =>{

if(error){
   return <AlertError />
}
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
    indexBook={indexBook}
    setIndexBook={setIndexBook}
    changeOfStartIndex={changeOfStartIndex}
  pagination={pagination}
     books={books}
     totalItems={totalItems}
     bookCount={bookCount}
     
    /> 
    }
   
    
  </div>
<div className='footer-sec'>
  
<Footer/>
</div>
        </div>
  )
}



export default AuthorSearch;