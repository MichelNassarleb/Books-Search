
import { GoogleLogin } from "react-google-login";



const Login = ({setSignedOut,setSignedIn,clientId})=>{



    
    

    const onSuccess = () =>{
        
        setSignedIn(true)
        setSignedOut(false)

    window.location.href='/authorsearch'
}
    const onFailure = (res) =>{
     
        console.log(res)
    }
    

  
    return(
        <div>
            
<div className="google-btn-signin">

        <div>
<GoogleLogin clientId={clientId}
    buttonText='Login with Google'
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    onSuccess={onSuccess}
    onFailure={onFailure}
   

    />
    </div>
  
</div>

</div>
)
}

export default Login;