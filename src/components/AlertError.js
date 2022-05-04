import React from "react";

const AlertError = () =>{
return(<div className="error-sec">
    <h1 className="error-message">Unexpected Error!<button onClick={()=>window.location.href='https://books-search-michelnassarleb.vercel.app/authorsearch'}> Refresh the page!</button></h1>
</div>
)
}

export default AlertError;