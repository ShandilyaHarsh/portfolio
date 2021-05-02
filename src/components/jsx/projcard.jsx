import '../CSS/projcard.css';
import { Link } from 'react-router-dom';

function Projcard({ wlin,im, txt1, subt1, subt2, btn1, btn2 }) {
  return (
    <div className="purpcard md:mt-8 mt-4 lg:w-4/5 m-auto">
      <figure class="lg:flex   rounded-xl p-8 md:p-0">
        <img
          class=" h-auto rounded-none p-2 mx-auto"
          src={im}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6  md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg ">{txt1}</p>
          </blockquote>
          <figcaption class="font-medium pb-4 ">
            <div class="text-cyan-600">{subt1}</div>
            <div class="text-gray-500">{subt2}</div>
          </figcaption>
          <span>
            <Link
              to={wlin}
              className="bg-transparent mr-4  px-4 py-2 border btnproj rounded-full text-center"
            >
              {' '}
              {btn1}{' '}
            </Link>
          </span>
        </div>
      </figure>
    </div>
  );
}

export default Projcard;
