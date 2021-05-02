import '../CSS/footer.css';
import { Link } from 'react-router-dom';
import Footlogo from '../../images/footlogo.jpg';

function Footer(props) {
  return (
    <footer>
      <div className="flex justify-center ">
        <div className="dpurple flex flex-col   lg:flex-row justify-center m-auto rounded-full py-10 w-4/5  mt-20">
          <h2 className=" footerh2 px-20 text-center">{props.tex}</h2>
          <p className=" footerp px-4 py-2  text-center">
            {props.tex1}
            <br /> {props.tex2}.
          </p>
          <Link
            to="/curr"
            className="bg-transparent py-2 mb-4 px-4 border btnhome rounded-full text-center"
          >
            {' '}
            I'm in{' '}
          </Link>
        </div>
      </div>
      <div className="footpurple flex flex-col justify-center text-center">
        <img src={Footlogo} alt="logo" className="w-12 m-auto" />
        <h2 className="py-6">Leveling up one step at a time.</h2>
        <div className="footic flex flex-row justify-center pb-8 text-center">
          <Link
            to="https://www.facebook.com/harsh.shandilya.1"
            className="  border rounded-full px-2 fontic"
          >
            <i className="fab fa-facebook-f  "></i>
          </Link>
          <Link
            to="https://www.instagram.com/shandilya_00007/"
            className="  border rounded-full px-1.5 fontic"
          >
            <i className="fab fa-instagram  "></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/harsh-shandilya/"
            className="  border rounded-full px-1.5 fontic"
          >
            <i className="fab fa-linkedin-in "></i>
          </Link>
          <Link
            to="https://github.com/ShandilyaHarsh"
            className="  border rounded-full px-1.5 fontic"
          >
            <i className="fab fa-github "></i>
          </Link>
          
        </div>
        <h2 className="pb-4 text-md last">
          Made with <i className="fas fa-heart "></i>{' '}
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
