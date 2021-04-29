import  "../CSS/certcard.css"
import Vermod from './vermod'

function Certcard({titl,des,im})
{

    return(
        <div class="wrapper  antialiased ">
<div>    
    
 <div className="relative px-4 mt-16  ">
   <div className="certb p-6 rounded-lg shadow-lg">  
    <h4 className="mt-1   leading-tight ">{titl}</h4>
 
  <p className="mt-1">{des}
    
  </p>
  <div className="flex flex-col justify-center">
  <Vermod im={im} />
  </div>
  </div>
 </div>
  
</div>

  </div>
        
    );

}

export default Certcard