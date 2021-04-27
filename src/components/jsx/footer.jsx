import  "../CSS/footer.css"
import {Link} from 'react-router-dom';
import Footlogo from '../../images/footlogo.jpg'

function Footer(props)
{

    return(<footer>
    <div className="flex justify-center">
        <div className="dpurple flex flex-col md:flex-row justify-center m-auto rounded-full py-10 w-4/5  lg:mt-20">
    <h2 className=" footerh2 px-20 text-center">Interested in Collaborating?</h2>
    <p className=" footerp px-4 py-2  text-center">Let's queue up a chat, shall we?<br/> I am all game for new ideas.</p>
    <Link to="/curr" className="bg-transparent lg:py-2 mb-4 px-4 border btnhome rounded-full text-center"> I'm in </Link>
    </div>
    </div>
    <div className="footpurple flex flex-col justify-center text-center">
    <img src={Footlogo} alt="logo" className="w-12 m-auto"/>
    <h2 className="py-6">Leveling up one step at a time.</h2>
    <div className="footic flex flex-row justify-center pb-8 text-center">
        <Link className="  border rounded-full px-2 fontic">
        <i className="fab fa-facebook-f  "></i>
        </Link>
        <Link className="  border rounded-full px-1.5 fontic">
        <i className="fab fa-instagram  "></i>
        </Link>
        <Link className="  border rounded-full px-1.5 fontic">
        <i className="fab fa-linkedin-in "></i>
        </Link>
        <Link className="  border rounded-full px-1.5 fontic">
        <i className="fab fa-github "></i>
        </Link>
        <Link className="  border rounded-full px-1.5 fontic">
        <i className="far fa-envelope "></i>
        </Link>
    </div>
    <h2 className="pb-4 text-md last">Made with <i className="fas fa-heart "></i> </h2>

    </div>
    </footer>
        
    );

}

export default Footer