
import { GoogleLogout } from "react-google-login";


const clientId = '423071023500-um3brv109de4vq4dq5cisqvblujl5eq1.apps.googleusercontent.com'


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