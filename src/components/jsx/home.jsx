import '../CSS/home.css'
import Navbar from './navbar';
import Cards from './card';
import Sports from '../../images/sports.jpeg'
import Acads from '../../images/co-curri.jpeg'
import Landing from '../../images/home.jpg'
import Coding from '../../images/coder.jpg'



function home(){
    
    return(<div className="homediv">
    <Navbar/>
    <div className="grid grid-cols-5 grid-rows-1 py-0  ">
    <div className=" row-start-1 col-start-1 col-span-5  flex flex-col pt-40 pb-10">
    <h1 className="headingi text-center">CODER, FRONT END DEVELOPER & STUDENT </h1>
    <h2 className="preheard text-xl text-center ">I design the code and I code the design.</h2>
     </div>
     </div>
     <div className="flex justify-center items-center pb-0 mb-0">
    <img className=" rounded-xl" src={Landing}  alt="computer"/>
    </div>
    <div className="purplec ">
        
        <h1 className="font-">Hi, I'm Harsh. Pleasure seeing you here.</h1>
        <p>I am an electronics major with a minor interest in Electronics. I started web development
         a year ago and am honing my skills in React,HTML,CSS & JS since then.
         I am also a competitive coder aiming to reach greater heights (and rating). Some or the other day I will graduate with 
        a minor in Comp Science and a major interest in it.</p>
        
    </div>
    
    <div className="flex flex-col whites md:flex-row card justify-between   ">
    <Cards  imgsrc={Sports} imtxt={"THE SPORTS ARC"} butno=" Achievements  "/>
    <Cards imgsrc={Coding} imtxt={"THE CODING ARC"} butno=" Projects "/>
    <Cards imgsrc={Acads} imtxt={"THE ACADEMICS ARC"} butno=" Achievements"/>

    </div>

    </div>
        

    );
}

export default home;