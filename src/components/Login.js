
import { GoogleLogin } from "react-google-login";



const Login = ({setSignedOut,setSignedIn})=>{



    
    
    const clientId = '1093032939322-qv46ld2aj4j05qq01gcd77b15tjgsttm.apps.googleusercontent.com'
    const onSuccess = (res) =>{
        
        setSignedIn(true)
        setSignedOut(false)

    window.location.href='/authorsearch'
}
    const onFailure = (res) =>{
        test = res
        console.log(test)
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