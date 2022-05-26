
import React, { useState, useEffect } from 'react'
import "./TS.css"
import styles from "./Dark.css";



function ToggelSwitch() {

     const [stylePath, setStylePath] = useState(styles);

     function handleButtonClick() {
          console.log("clicked")
          if (stylePath == styles) {
               setStylePath('https://cdn.syncfusion.com/ej2/bootstrap5.css')
          }
          else {
               setStylePath(styles)
          }

     }



     useEffect(() => {
          var head = document.head;
          var link = document.createElement("link");
          link.type = "text/css";
          link.rel = "stylesheet";
          link.href = stylePath;
          head.appendChild(link);
          return () => { head.removeChild(link); }
     }, [stylePath]);


     return (
          <>

               <label class="switch">
                    <input type="checkbox" onClick={handleButtonClick} />
                    <span class="slider round" ></span>
               </label>
          </>
     )
}



export default ToggelSwitch