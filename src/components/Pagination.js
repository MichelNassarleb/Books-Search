import React, { useEffect } from "react";

const Pagination = ({changeOfStartIndex,totalItems,bookCount}) =>{
const pages = [];
const numberOfItems = parseInt(totalItems);
const numberOfBooks = parseInt(bookCount);
const numberOfPages = numberOfItems / numberOfBooks ;
console.log(parseInt(numberOfPages))
for(let i = 1 ; i < parseInt(numberOfPages) - 1 ; i ++){
    pages.push(i);
}

    useEffect(()=>console.log(pages))
return <div className='pagination'>
    <p>
        {pages.map((page)=>{
          return  <small onClick={()=>changeOfStartIndex(page)} key={page} >{page}</small>
        })}
    </p>
     </div>
}

export default Pagination;