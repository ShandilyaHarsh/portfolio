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
    <div className=" row-start-1 col-start-1 col-span-5  flex flex-col pt-32 pb-10">
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
    
    <div className="flex flex-col whites md:flex-row card md:justify-between md:px-10  ">
    <Cards  imgsrc={Sports} imtxt={"THE SPORTS ARC"} butno=" Achievements  " />
    <Cards imgsrc={Coding} imtxt={"THE CODING ARC"} butno=" Projects "/>
    <Cards imgsrc={Acads} imtxt={"THE ACADEMICS ARC"} butno=" Achievements"/>

    </div>
    <div className="flex flex-col lang md:px-10 py-10 langu "> <h1 className="m-auto">LANGUAGES FRAMEWORKS AND TECHNOLOGIES</h1></div>
    <div className="flex flex-col md:flex-row text-center justify-around md:px-10">
    <div className="flex flex-col techcard justify-center mx-4">
    <i className="fab fa-react fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">React</h3>
    <progress id="file" value="68" max="100" > 60% </progress>
    </div>


    </div>
    <div className="flex flex-col techcard justify-center mx-4">
    <i className="fab fa-html5 fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">HTML</h3>
    <progress id="file" value="80" max="100" > 80% </progress>
    </div>


    </div>
    <div className="flex flex-col techcard justify-center mx-4">
    <i className="fab fa-css3-alt fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">CSS</h3>
    <progress id="file" value="80" max="100" > 80% </progress>
    </div>


    </div>
    <div className="flex flex-col techcard justify-center mx-4">
    <i className="fab fa-js-square fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">JavaScript</h3>
    <progress id="file" value="54" max="100" > 54% </progress>
    </div>

    </div>
    </div>
    <div className="flex  flex-col md:flex-row text-center justify-around md:px-10">
    <div className="flex flex-col sm:display-none techcard justify-center mx-4">
    <i className="fab fa-bootstrap fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">BootStrap</h3>
    <progress id="file" value="60" max="100" > 60% </progress>
    </div>


    </div>
    <div className="flex  flex-col techcard justify-center mx-4">
    <i className="fas fa-database fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">MongoDB</h3>
    <progress id="file" value="25" max="100" > 25% </progress>
    </div>


    </div>
    <div className="flex flex-col techcard justify-center mx-4">
    <i className="fab fa-python fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">Python</h3>
    <progress id="file" value="64" max="100" > 64% </progress>
    </div>


    </div>
    <div className="flex flex-col techcard justify-center mx-4">
    <i className="fab fa-node fontic text-black "></i>
    <div className="flex flex-col">
    <h3 className="texticon pb-8">NodeJS</h3>
    <progress id="file" value="30" max="100" > 30% </progress>
    </div>


    </div>
    </div>

    </div>
        

    );
}

export default home;