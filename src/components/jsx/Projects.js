import '../CSS/project.css';
import Navbar from './navbar.jsx';
import Projcard from './projcard';
import projdata from './data/projdata';
import Footer from './footer';
import Modal from './vermod';
import mod1 from '../../images/proj/mod1.jpg';
import mod2 from '../../images/proj/mod2.jpg';

import data from './data/techinfo';

function project() {
  return (
    <div>
      <Navbar />
      <h1 className="headingi text-center">PROJECTS & INTERNSHIPS </h1>
      <div className="  justify-around ">
        {projdata
          .filter((item, idx) => idx < 2)
          .map(({ wlink, txt1, subt1, subt2, but1, but2, ims }, index) => {
            return (
              <div key={index}>
                <Projcard
                  txt1={txt1}
                  subt1={subt1}
                  subt2={subt2}
                  btn1={but1}
                  btn2={but2}
                  im={ims}
                  wlin={wlink}
                />
              </div>
            );
          })}
      </div>
      <div className="purpleproj sm:my-16">
        <h1>A little about these projects and internships</h1>
        <p className="lg:px-4">
          When I started searching for internships, getting a content writing
          internship wasn't easy but I would go as far as to say its not even
          remotely close to how tough it is to get a web dev or app dev
          internship. I have done a content writing internship and a marketing
          internship but when I thought of doing a web development internship I
          was overwhelmed about where to start, how to start but all these
          things work out in the end. You just need to start, start making the
          application loading page or your website's home page and you would see
          that answers to "How to do" are much easier to find than "How to
          start".
        </p>
        <div className="flex lg:flex-row  flex-col text-center pb-8 justify:center md:justify-around">
          <span>
            <Modal
              certex="Content Writing Internship Onboard"
              className="border border-black"
              im={mod1}
            />
          </span>
          <span>
            <Modal certex="LOR of Marketing Internship" im={mod2} />
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
            <a
              href="https://www.codechef.com/users/harsh_0710"
              className="bg-transparent   px-4 py-2 my-2  mx-auto  border btnproj rounded-full text-center"
            >
              {' '}
              Codechef Profile{' '}
            </a>
            <a
              href="https://codeforces.com/profile/ShandilyaHarsh"
              className="bg-transparent  px-4 py-2 my-2  mx-auto border btnproj rounded-full text-center"
            >
              {' '}
              Codeforces Profile{' '}
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/shandilyaharsh2001/practice/"
              className="bg-transparent   px-4 py-2 my-2  mx-auto border btnproj rounded-full text-center"
            >
              {' '}
              Geeks for geeks Profile{' '}
            </a>
            <a
              href="https://www.interviewbit.com/profile/Shandilya-Harsh"
              className="bg-transparent   px-4 py-2 my-2  mx-auto border btnproj rounded-full text-center"
            >
              {' '}
              InterviewBit Profile{' '}
            </a>
          </div>
        </div>
      </div>
      <div className=" text-center lang md:px-10 py-10 langu ">
        {' '}
        <h1 className="m-auto">LANGUAGES FRAMEWORKS AND TECHNOLOGIES</h1>
      </div>
      <div className="grid grid-flow-row gap-10 mx-4  xl:grid-cols-4 ld:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 text-center justify-around md:px-10">
        {data.map((element, index) => {
          return (
            <div
              key={index}
              className="flex flex-col   techcard justify-center "
            >
              <i className={`${element.icon} fontick pt-4`}></i>
              <div className="flex flex-col">
                <h3 className="texticon pb-8 ">{element.name}</h3>
                <progress
                  className="file w-full"
                  value={element.percent.toString()}
                  max="100"
                >
                  {' '}
                  {element.percent}%{' '}
                </progress>
              </div>
            </div>
          );
        })}
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
