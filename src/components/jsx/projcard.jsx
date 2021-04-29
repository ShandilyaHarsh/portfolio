import '../CSS/projcard.css';
import proj1 from  '../../images/proj/proj1.jpg'
import { Link } from 'react-router-dom';

function Projcard() {
  return (
    <div className="purpcard md:mt-8 mt-4 lg:w-4/5 m-auto">
      <figure class="lg:flex   rounded-xl p-8 md:p-0">
        <img
          class="  md:h-auto rounded-none p-2 mx-auto"
          src={proj1}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg ">
              This was my first attempt at web development by using HTML, CSS
              and Bootstrap. Writing 1000 lines of styling and copying HTML code
              over and over again for same components makes us value frameworks
              like React and technologies like Tailwind even more. The purpose
              of this website was to promote a book named "Hunting Houdini".
            </p>
          </blockquote>
          <figcaption class="font-medium mb-4">
            <div class="text-cyan-600">Author's Name: Yash Shandilya</div>
            <div class="text-gray-500">Wattpad username: Bookbreath</div>
          </figcaption>
          <span>
            <Link
              to="/curr"
              className="bg-transparent mr-4  px-4 border btnproj rounded-full text-center"
            >
              {' '}
              Website link{' '}
            </Link>
          </span>
          <span>
            <Link
              to="/curr"
              className="bg-transparent mr-4   px-4 border btnproj rounded-full text-center"
            >
              {' '}
              Author profile{' '}
            </Link>
          </span>
        </div>
      </figure>
    </div>
  );
}

export default Projcard;
