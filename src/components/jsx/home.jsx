import '../CSS/home.css'
import Navbar from './navbar';
import Cards from './card';
import Sports from '../../images/sports.jpeg'
import Acads from '../../images/co-curri.jpeg'


function home(){
    
    return(<div>
    <Navbar/>
    <p> this is home</p>
    <div className="flex flex-col md:flex-row ">
    <Cards imgsrc={Sports} imtxt={"FOR THE LOVE OF IT"}/>
    <Cards imgsrc={Acads} imtxt={"FOR THE RUSH OF IT"}/>
    </div>

    </div>
        

    );
}

export default home;