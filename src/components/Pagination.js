import React from "react";

const Pagination = ({changeOfStartIndex}) =>{
    const pages = [1,2,3,4]


    
return <div className='pagination'>
    <p>
        {pages.map((page)=>{
          return  <small onClick={()=>changeOfStartIndex(page)} key={page} >{page}</small>
        })}
    </p>
     </div>
}

export default Pagination;