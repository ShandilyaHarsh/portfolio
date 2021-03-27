import '../CSS/navbar.css'
import {Link} from 'react-router-dom';

function navbar(){
    
    return(<nav className="flex items-center text-white bg-red-900 justify-around">
    <h3>logo</h3>
    <ul className="flex items-center justify-around h-10 w-2/4  list-none">
        <Link to='/home'><li> home</li></Link>
       <Link to='/project'><li> project</li></Link>
        <Link to='/curr'><li> curricular</li></Link>
      
    </ul>


    </nav>  

    );
}

export default navbar