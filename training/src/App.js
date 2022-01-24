import logo from './logo.svg';
import './App.css';
import Homecomp from './component/Homecomp';
import Aboutcomp from './component/Aboutcomp';
import Gallerycomp from './component/Gallerycomp';
import Contactcomp from './component/Contactcomp';
import Servicescomp from './component/Servicescomp';
import Blogcomp from './component/Blogcomp';
//import Home from './component/Home';
//import Homeclass from './component/Homeclass';
//import New from './component/New';
//import Aboutclass from './component/Aboutclass';








function App() {
  return(
    <div className="App">
      <Homecomp />
      <Aboutcomp />
      <Gallerycomp />
      <Contactcomp />
      <Servicescomp />
      <Blogcomp pro="You have your morning routine, just like I do. You skim the online news and find the latest trends in your industry. Why not make your morning routine into a blog post?" />
      
      
    




  </div>
 )
}

export default App;
