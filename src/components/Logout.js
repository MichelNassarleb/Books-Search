
import { GoogleLogout } from "react-google-login";


const clientId = '1093032939322-qv46ld2aj4j05qq01gcd77b15tjgsttm.apps.googleusercontent.com'


function Logout({setSignedIn,setSignedOut,signedIn}){
   
  
    
    const onSuccess = (res) =>{
        console.log('Logout Successfull!')
        setSignedIn(false)
        setSignedOut(true)
        window.location.href='/'
  
    }

return   ( <div id="signOutButton">
    <GoogleLogout clientId={clientId}
    buttonText={'Logout'}
    onLogoutSuccess={onSuccess}
    
    />
   
    </div>)
}

export default Logout;