import '../CSS/land.css';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import photo from '../../website.jpg';
import {Link} from 'react-router-dom';

function Land() {
  let points = 0;
  const keys = [70, 76, 65, 83, 72];
  let history = useHistory();

  const handleKeyPress = (event) => {
    if (keys[points] === event.keyCode) {
      points++;
      if (points === 5) history.push('/home');
    } else points = 0;
  };
  const [Visible, setVisible] = useState(false);

  return (
    <div
      id="myDiv"
      onKeyDown={handleKeyPress}
      tabIndex="0"
      className="pb-12 pt-12"
    >
      <div className="flex  p-6  md:flex-row  gap-5 text-center sm:text-left md:w-full flex-col-reverse">
        <div className="md:w-1/2">
          <div className="css-typing ">
            <h2>cout&#60;&#60;"hello there, I am Harsh"</h2>
            <h2>OOPS! looks like I forgot the semicolon.</h2>
            <h2> Don't worry, we are not gonna compile it anyway :")</h2>
          </div>
          <h1 className="heading text-gray-100 text-4xl tracking-wide py-6">
            Harsh who?
          </h1>
          <ul className="listelem font-mono p-6">
            <li>
              '14-3rd runner up at National Abacus Competition held in
              Hyderabad.
            </li>
            <li>
              '14-'16: Gold Medallist in International Maths Olympiad, National
              Science Olympiad at school level.
            </li>
            <li>
              '14-'16: Represented KVS Bangalore 2 times in Nationals and KVS
              India once in SGFI.{' '}
            </li>
            <li>'17: Scored a perfect 10 cgpa in class 10th.</li>
            <li>'18: Represented KVS Bangalore in Oorja Cup, Football.</li>
            <li>
              '18: Captain of KVS Bangalore Kho Kho Under-19 Team which secured
              2nd position at Nationals, and represented Kvs India at SGFI.
            </li>
            <li>
              '18: Participated in Telescope making workshop representing School
              and made a telescope from scratch out of a PVC pipe.
            </li>
            <li>
              '18: Qualified RMO being in top 5 percent of KVS all over India.
            </li>
            <li>'19: Qualified JEE Mains,Advanced and Bitsat.</li>
            <li>
              '20: A member of Bits FC team which was the champion of the 2nd
              division football league, survived a pandemic and got addicted to
              code.
            </li>
            <li className="text-gray-500">
              '21: Still going on, and I hope I achieve something worth writing
              about here?
            </li>
          </ul>
        </div>
        <div className="text-center ">
          <h1 className="heading text-gray-100 text-4xl tracking-wide py-6">
            MEET HARSH SHANDILYA!
          </h1>
          <p className="text-gray-500 text-sm place-content-end font-mono">
            {' '}
            (If you are visiting this page, you have probably met him already)
          </p>
          <button className="  text-gray-900 m-2.5 text-sm py-1 font-mono px-1 rounded btns">
            Sadly, YES!
          </button>
          <button className="  text-gray-900 m-2.5 text-sm py-1 font-mono px-1 rounded btns">
            Thankfully, NO!
          </button>
          <br />
          <div className=" flex flex-row justify-center ">
            <img
              src={photo}
              alt="harsh"
              className="rounded-full margin-auto "
            />
          </div>
          <div className=" text-center text-gray-100 py-6">
            <button
              onClick={() => setVisible(true)}
              className="  text-gray-900 m-2.5 text-sm py-1 hidden md:inline font-mono px-1  rounded btnland"
            >
              Click to go to the Website{' '}
            </button>

            {Visible ? (
              <div>
                <h1 className="last text-2xl tracking-wide">Type flash</h1>
                <p className="text-gray-500 text-sm place-content-end font-mono sm-display-none">
                  {' '}
                  stop finding the input box, type the word and let the
                  passageway to the website unfold itself{' '}
                </p>
              </div>
            ) : null}
            <Link
            to="/home"
              
              className="  text-gray-900 m-2.5 text-sm py-1 md:hidden block font-mono px-1  rounded btnland"
            >
              Click to go to the Website{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Land;
