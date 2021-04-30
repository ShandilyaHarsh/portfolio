import '../CSS/card.css';

import { HashLink as Hink } from 'react-router-hash-link';

function Cards(props) {
  return (
    <div className="container md:m-5 m-auto my-10 md:w-auto w-20 ">
      <img src={props.imgsrc} alt="Avatar" className="image rounded-xl " />
      <div className="overlay  rounded-xl ">
        <div className="texti">{props.imtxt}</div>
        <div className="flex justify-center ">
          <Hink
            to={props.lin}
            className="bg-transparent py-2 px-4 border btn rounded-full"
          >
            View {props.butno}
          </Hink>
        </div>
      </div>
    </div>
  );
}

export default Cards;
