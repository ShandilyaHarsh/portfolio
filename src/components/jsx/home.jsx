import '../CSS/home.css';
import Navbar from './navbar';
import Cards from './card';
import Sports from '../../images/sports.jpeg';
import Acads from '../../images/co-curri.jpeg';
import Landing from '../../images/home.jpg';
import Coding from '../../images/coder.jpg';
import { Link } from 'react-router-dom';
import Footer from './footer';


function home() {
  return (
    <div className="homediv">
      <Navbar />
      <div className="grid grid-cols-5 grid-rows-1 py-0  ">
        <div className=" row-start-1 col-start-1 col-span-5  flex flex-col pt-32 pb-10">
          <h1 className="headingi text-center">
            CODER, FRONT END DEVELOPER & STUDENT{' '}
          </h1>
          <h2 className="preheard text-xl text-center ">
            I design the code and I code the design.
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center pb-0 mb-0">
        <img className=" rounded-xl" src={Landing} alt="computer" />
      </div>
      <div className="purplec ">
        <h1>Hi, I'm Harsh. Pleasure seeing you here.</h1>
        <p>
          I am an electronics major with a minor interest in Electronics. I
          started web development a year ago and am honing my skills in
          React,HTML,CSS & JS since then. I am also a competitive coder aiming
          to reach greater heights (and rating). Some or the other day I will
          graduate with a minor in Comp Science and a major interest in it.
        </p>
      </div>

      <div className="flex flex-col whites md:flex-row card md:justify-between md:px-10  ">
        <Cards
          imgsrc={Sports}
          imtxt={'SPORTS ARC'}
          butno=" Achievements"
          lin="/curr#spor"
        />
        <div className="container h-40 md:m-5 md:mt-28 md:pt-2 m-auto my-10 md:w-auto w-20 ">
          <img src={Coding} alt="Avatar" className="image rounded-xl " />
          <div className="overlayshort  rounded-xl ">
            <div className="texti">Coding Arc</div>
            <div className="flex justify-center ">
              <Link
                to="/project"
                className="bg-transparent py-2 px-4 border btn rounded-full"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <Cards
          imgsrc={Acads}
          imtxt={'ACADEMICS ARC'}
          butno=" Achievements"
          lin="/curr"
        />
      </div>

      <Footer
        tex="Interested in Collaborating?"
        tex1="Let's queue up a chat, shall we?"
        tex2="I'm all game for new ideas"
      />
    </div>
  );
}

export default home;
