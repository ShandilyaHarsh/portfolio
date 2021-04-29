import '../CSS/project.css'
import Navbar from './navbar.jsx'
import Projcard from './projcard'
import projdata from './data/projdata'
import Footer from './footer'
import Modal from './vermod'
import mod1 from '../../images/proj/mod1.jpg'
import mod2 from '../../images/proj/mod2.jpg';
import {Link} from 'react-router-dom';


function project(){
    
    return (
      <div>
        <Navbar />
        <h1 className="headingi text-center">PROJECTS & INTERNSHIPS </h1>
        <div className="  justify-around ">
          {projdata
            .filter((item, idx) => idx < 2)
            .map(({ txt1, subt1, subt2, but1, but2, ims }, index) => {
              return (
                <div key={index}>
                  <Projcard
                    txt1={txt1}
                    subt1={subt1}
                    subt2={subt2}
                    btn1={but1}
                    btn2={but2}
                    im={ims}
                  />
                </div>
              );
            })}
        </div>
        <div className="purplecurr ">
          <h1>A little about these projects and internships</h1>
          <p className="lg:px-4">
            When I started searching for internships, getting a content writing
            internship wasn't easy but I would go as far as to say its not even
            remotely close to how tough it is to get a web dev or app dev
            internship. I have done a content writing internships and a
            marketting internship but when I thought of doing a web development
            internship I was overwhelmed about where to start, how to start but
            all these things work out in the end. You just need to start, start
            making the application loading page or your website's home page and
            you would see that answers to "How to do" are much easier to find
            than "How to start".
          </p>
          <div className="flex lg:flex-row  flex-col text-center pb-8 justify:center md:justify-around">
            <span>
              <Modal certex="Content Writing Internship Onboard" im={mod1} />
            </span>
            <span>
              <Modal certex="LOR of marketting Internship" im={mod2} />
            </span>
          </div>

          <h2>Happy developing y'all.</h2>
        </div>
        <div className="  justify-around ">
          {projdata
            .filter((item, idx) => idx > 1)
            .map(({ txt1, subt1, subt2, but1, but2, ims }, index) => {
              return (
                <div key={index}>
                  <Projcard
                    txt1={txt1}
                    subt1={subt1}
                    subt2={subt2}
                    btn1={but1}
                    btn2={but2}
                    im={ims}
                  />
                </div>
              );
            })}
        </div>
        <div className="purpcard md:mt-8 mt-4 lg:w-4/5 m-auto">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p class="text-lg ">
              While I like developing solutions through websites for small scale
              problems, I am also fascinated as to how algorithms and data
              structures solve difficult logical problems with such ease. I am
              into competitive coding(though a beginner), I like to learn
              different algorithms and data structures and participate in coding
              contests for the daily dose of competitive rush.{' '}
            </p>
            <div className="pt-6 md:px-none  flex-col md:flex-row flex text-center   md:justify-around">
              <Link
                to="/curr"
                className="bg-transparent   px-4 py-2 my-2  mx-auto  border btnproj rounded-full text-center"
              >
                {' '}
                Codechef Profile{' '}
              </Link>
              <Link
                to="/curr"
                className="bg-transparent  px-4 py-2 my-2  mx-auto border btnproj rounded-full text-center"
              >
                {' '}
                Codeforces Profile{' '}
              </Link>
              <Link
                to="/curr"
                className="bg-transparent   px-4 py-2 my-2  mx-auto border btnproj rounded-full text-center"
              >
                {' '}
                Geeks for geeks Profile{' '}
              </Link>
              <Link
                to="/curr"
                className="bg-transparent   px-4 py-2 my-2  mx-auto border btnproj rounded-full text-center"
              >
                {' '}
                InterviewBit Profile{' '}
              </Link>
            </div>
          </div>
        </div>
        <Footer
          tex="Interested in improving these projects?"
          tex1="Let's have a talk "
          tex2="about 'what to' and 'how to' "
        />
      </div>
    );
}

export default project;