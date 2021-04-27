import '../CSS/home.css'
import Navbar from './navbar';
import Cards from './card';
import Sports from '../../images/sports.jpeg'
import Acads from '../../images/co-curri.jpeg'
import Landing from '../../images/home.jpg'
import Elev from '../../images/elev.jpg'



function home(){
    
    return(<div className="homediv">
    <Navbar/>
    <div className="grid grid-cols-5 grid-rows-1 py-0  ">
    <div className=" row-start-1 col-start-1 col-span-5  md:col-start-2 md:col-span-3 pt-40 pb-10">
    <h1 className="headingi md:px-2">CODER, FRONT END DEVELOPER & STUDENT </h1>
    <h2 className="preheard text-xl md:px-64 ">I design the code and I code the design.</h2>
     </div>
     </div>
     <div className="grid grid-cols-6 mx-10 pb-0 mb-0">
    <img className="col-span-3 mx-16 col-start-3 rounded-xl" src={Landing}  alt="computer"/>
    </div>
    <div className="purplec ">
        
        <h1 className="font-">Hi, I'm Harsh. Pleasure seeing you here.</h1>
        <p>I am an electronics major with a minor interest in Electronics. I started web development
         a year ago and am honing my skills in React,HTML,CSS & JS since then.
         I am also a competitive coder aiming to reach greater heights (and rating). Some or the other day I will graduate with 
        a minor in Comp Science and a major interest in it.</p>
        
    </div>
    
    <div className="whites grid grid-cols-2">
    <div className="col-start-1">
    <div className="inline"><img src={Elev} alt="Elev"/>
    <h3 className="inline">Elevator Control</h3> </div>
        
    

    </div>
    
    
    </div>
    <div className="flex flex-col md:flex-row card justify-around  ">
    <Cards  imgsrc={Sports} imtxt={"THE SPORTS ARC"}/>
    <Cards imgsrc={Acads} imtxt={"THE ACADEMICS ARC"}/>

    </div>

    </div>
        

    );
}

export default home;