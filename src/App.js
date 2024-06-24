// import logo from './logo.svg';
import './App.css';
import { ImageComponent } from './component/ImageComponent';
import MyNavbar from './component/MyNavbar';
import PostNavbar from './component/PostNavbar';
// import { MyNavbar } from './component/MyNavbar';
import Posts from './component/Posts'
import { Sugestion } from './component/Sugestion';
import { FaPen } from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <MyNavbar/>
      <ImageComponent/>

      <div className='ms-md-5 me-md-5'>

        <PostNavbar/>
        <hr></hr>
      </div>

      <div className='row ms-md-5 me-md-5 ms-0 me-0'>
        <div className='col-md-8'>
          
          <Posts />
       
        </div>

        <div className='col-md-4'>
              <Sugestion/>
        </div>
      </div>

      <div className='show'>
          <button className='rounded-circle' style={{backgroundColor:"#FDFFD2"}} ><FaPen/></button>
      </div>

    </div>
  );

}

export default App;
