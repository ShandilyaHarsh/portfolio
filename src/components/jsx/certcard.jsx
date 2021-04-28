import  "../CSS/certcard.css"
import Vermod from './vermod'

function Certcard({titl,des,im})
{

    return(
        <div class="wrapper  antialiased ">
<div>    
    
 <div class="relative px-4 mt-16  ">
   <div class="certb p-6 rounded-lg shadow-lg">  
    <h4 class="mt-1   leading-tight ">{titl}</h4>
 
  <p class="mt-1">{des}
    
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