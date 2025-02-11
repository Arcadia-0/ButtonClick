import { useState } from "react";

const Button = () => {
    const [showBox, setShowBox] = useState(false);
    const buttonPress = () =>{
        if(!showBox){
            setShowBox(true)
        }
    }
    const buttonHide = () =>{
        setShowBox(false)
    }
  return (
    <div>
      <button onClick={buttonPress}>Göster</button>
      <button onClick={buttonHide}>Gizle</button>

     
      {showBox && (
        <div>
        <h1 style={{ width: '100px', height: '100px', backgroundColor: 'red', marginTop: '10px' }}></h1>
        
        </div>
      )}
    </div>
   
  )
}

export default Button