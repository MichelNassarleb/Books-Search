import React from 'react';



const Search = ({fetchBooks,setAuthorName,setBookCount,setPagination}) =>{
    const numbers = [10,20,40]
    
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