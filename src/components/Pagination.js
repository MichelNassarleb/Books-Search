import React, { useEffect } from "react";

const Pagination = ({changeOfStartIndex,totalItems,bookCount}) =>{
const pages = [];
const numberOfItems = parseInt(totalItems);
const numberOfBooks = parseInt(bookCount);

let numberOfPages = numberOfItems / numberOfBooks ;



for(let i = 1 ; i < parseInt(numberOfPages) ; i ++){
    pages.push(i);
}

   
return <div className='pagination'>
  {pages.length > 2 &&   <p className="booksline">B{pages.length > 30 ? pages.slice(0,29).map(()=>'o') : pages.map(()=>'o')}ks</p>}
    <p>
        {pages.length > 30 ? pages.slice(0,29).map((page)=>{
          return  <small onClick={()=>changeOfStartIndex(page)} key={page} >{page}</small>
        }) : pages.map((page)=>{ return <small onClick={()=>changeOfStartIndex(page)} key={page} >{page}</small>})}
    </p>
     </div>
}

export default Pagination;