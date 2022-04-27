
import { GoogleLogout } from "react-google-login";





function Logout({setSignedIn,setSignedOut,clientId}){
   
  
    
    const onSuccess = (res) =>{
        console.log('Logout Successfull!')
        setSignedIn(false)
        setSignedOut(true)
    }

return   ( <div id="signOutButton">
    <GoogleLogout clientId={clientId}
    buttonText={'Logout'}
    onLogoutSuccess={onSuccess}
    
    />
   
    </div>)
}

export default Logout;