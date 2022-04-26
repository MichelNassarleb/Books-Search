import React from 'react';



const Search = ({fetchBooks,setAuthorName,setBookCount,setPagination,authorName}) =>{
    const numbers = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
    
    const setValues = (e) =>{
    setAuthorName(e.target.value)
   setPagination(true) 
   if(e.target.value === ''){
       setPagination(false)
   }
}

    
    
    const handlePress = (event) =>{
        if(event.key === 'Enter'){
            fetchBooks();
        }
    }
   
const handleSubmit = (e)=>{
    e.preventDefault();
}
return(
<form action="get" onSubmit={handleSubmit}>
    <input type="text" onChange ={setValues}
    onKeyPress={handlePress}
    placeholder='Search for an author...'
    />
    <label htmlFor="numberOfBooks">Number of books: </label>
     <select name='numberOfBooks' onChange ={(e)=>{
        setBookCount(e.target.value)
    }}
    onKeyPress={handlePress}
    placeholder='number of books'
    >
        {numbers.map((number,index)=>{
            return(
                <option key={index} value={number}>{number}</option>
            )
        })}
    </select> 

</form>

)


}

export default Search;