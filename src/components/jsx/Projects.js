import '../CSS/project.css'
import Navbar from './navbar.jsx'
import Projcard from './projcard'


function project(){
    
    return (
      <div>
        <Navbar />
        <h1 className="headingi text-center">PROJECTS & INTERNSHIPS </h1>
        <Projcard />
      </div>
    );
}

export default project;