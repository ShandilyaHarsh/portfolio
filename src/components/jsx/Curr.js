import '../CSS/curr.css';
import Navbar from './navbar.jsx';
import Certcard from './certcard.jsx';
import certac from './data/certac';
import Footer from './footer';
import certsp from './data/certsp';

function curricular() {
  return (
    <div>
      <Navbar />
      <h1 className="headingi text-center">ACADEMIC ACHIEVEMENTS </h1>

      <div className="grid grid-flow-row gap-10 mx-4  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 text-center justify-around md:px-10">
        {certac.map(({ title, desc, ims }, index) => {
          return (
            <div key={index}>
              <Certcard
                titl={title}
                des={desc}
                im={ims}
                certex="View Certificate"
              />
            </div>
          );
        })}
      </div>
      <div className="purplecurr ">
        <h1>A little about these achievements</h1>
        <p className="lg:px-4">
          While these achievements amount to nothing, I felt a portfolio would
          be incomplete without achievements. Achievements are not to prove you
          are the best, its about you celebrating little things. (For now, if
          there is nothing in it, you can add "Surviving a pandemic") While we
          are always taught to know our shortcomings, its equally important to
          understand the good things about ourselves and others. So, Let's start
          appreciating the little things because a genuine compliment goes a
          long way.
        </p>
        <h2>Best of Luck y'all.</h2>
      </div>
      <h1 className="headingi text-center pt-16">SPORTS ACHIEVEMENTS </h1>

      <div
        id="spor"
        className="grid grid-flow-row gap-10 mx-4  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 text-center justify-around md:px-10"
      >
        {certsp.map(({ title, desc, ims }, index) => {
          return (
            <div key={index}>
              <Certcard
                titl={title}
                des={desc}
                im={ims}
                certex="View Certificate"
              />
            </div>
          );
        })}
      </div>
      <Footer
        tex="Interested in discussing football?"
        tex1="Let's talk about why"
        tex2=" Real Madrid is the best"
      />
    </div>
  );
}

export default curricular;
