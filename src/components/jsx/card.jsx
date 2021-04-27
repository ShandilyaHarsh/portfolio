import  "../CSS/card.css"
import {Link} from 'react-router-dom';





function Cards(props)
{

    return(
        <div className="container m-5  ">

  <img src={props.imgsrc} alt="Avatar" className="image rounded-xl "/>
  <div className="overlay  rounded-xl ">
    <div className="texti">{props.imtxt}</div>
    <div className="flex justify-center ">
    <Link to="/curr" className="bg-transparent py-2 px-4 border btn rounded-full">
  View {props.butno}
</Link>
</div>

  </div>
</div>
    );

}

export default Cards