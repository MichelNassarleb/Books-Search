import React, { useEffect } from 'react'
import Logoutbutton from './Logout'

import Search from './Search'
import Books from './Books'



const AuthorSearch = ({setSignedIn,
   setSignedOut,
   fetchBooks,
   setAuthorName,
   books,
   authorName,
   signedIn,
setBookCount,
setPagination,
clientId}) =>{


  return(

    <div className='fullpage'>
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
          />
    {authorName && <Books 
     books={books}
     
    /> }
     </div>
        </div>
  )
}



export default AuthorSearch;