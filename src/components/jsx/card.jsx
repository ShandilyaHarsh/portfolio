import  "../CSS/card.css"
import {Link} from 'react-router-dom';




function Cards(props)
{

    return(
        <div className="container m-5">
  <img src={props.imgsrc} alt="Avatar" className="image rounded-xl "/>
  <div className="overlay  rounded-xl ">
    <div className="texti">{props.imtxt}</div>
    <Link to="/curr" class="bg-transparent py-2 px-4 border btn rounded">
  View Achievements
</Link>

  </div>
</div>
    );

}

export default Cards