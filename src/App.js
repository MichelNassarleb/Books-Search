
import './App.css';
import React, { useEffect } from 'react'
import Loading from './components/Loading'
import { useState } from 'react'
import AuthorSearch from './components/AuthorSearch';
import Loginbutton from './components/Login'
import { gapi } from 'gapi-script';
import { Routes, Route } from "react-router-dom";
import Pagination from './components/Pagination';
import Footer from './components/Footer'
import EmbeddedViewer from './components/EmbeddedViewer'

function App() {


  const clientId = '423071023500-um3brv109de4vq4dq5cisqvblujl5eq1.apps.googleusercontent.com'
const [authorName,setAuthorName] = useState('')
const [indexBook, setIndexBook] = useState(0)
const [loading,setLoading] = useState(true)
  const [books,setBooks] = useState([]);
  const[signedIn,setSignedIn] = useState(false);
const[signedOut,setSignedOut] = useState(false)
const [bookCount,setBookCount] = useState(10);
const [pagination,setPagination] = useState(false)
const[highValue,setHighValue] = useState(false)
  var url = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${authorName}&download=epub&filter=free-ebooks&orderBy=newest&startIndex=${indexBook && `${indexBook}`}${bookCount && `&maxResults=${bookCount}`}`



 
 const fetchBooks = async() =>{

  try{
   
  const response = await fetch(url)
  const data = await response.json();
  setBooks(data.items)
setLoading(false)

  }
  catch(error){
      alert(error);
  }

}
useEffect(()=>{
return setBooks([])

},[])
useEffect(()=>{
  fetchBooks()
 },[authorName])
 useEffect(()=>{
   fetchBooks()
if(bookCount > 10){
  setHighValue(true)
}

 },[bookCount])

useEffect(()=>{
  fetchBooks()
},[indexBook])
 
const changeOfStartIndex = (pageNumber)=>{

  setIndexBook((pageNumber-1) * 10)
console.log(indexBook)


  }



useEffect(()=>{
  function start(){
    gapi.auth2.init({
      clientId:clientId,
      scope:''
    })
  }
  gapi.load('client:auth2',start);
})

if(loading){
  return <Loading />
}




  return (
    
    
    

<div>
<Routes>


<Route path='/' element={<Loginbutton 
   signedIn={signedIn} 
   setSignedIn={setSignedIn}
    setSignedOut={setSignedOut}
     signedOut={signedOut}
     clientId={clientId}
     /> }
     />
    
<Route
 path='AuthorSearch'
  element={<AuthorSearch 
    authorName={authorName}
    books={books}
     fetchBooks={fetchBooks}
      setSignedIn={setSignedIn}
       setSignedOut={setSignedOut}
        setAuthorName={setAuthorName}
        signedIn={signedIn}
        setBookCount={setBookCount}
        bookCount={bookCount}
        setPagination={setPagination}
        clientId={clientId}
        highValue = {highValue}
        setHighValue={setHighValue}
        pagination={pagination}
        indexBook={indexBook}
        setIndexBook={setIndexBook}
        changeOfStartIndex={changeOfStartIndex}
        />}

  />
  
  <Route path='/AuthorSearch/:volumeId' element={<EmbeddedViewer />}/>
    </Routes>
    
    </div>
  );
  
}

export default App;
