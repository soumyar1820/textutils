import './App.css';
import About from './components/about';

import Navbar from './components/Navbar';
// import Textform from './components/Textform';


function App() {
  return (
   <>
     <Navbar title = "TextUtils" Abouttext = "About Us"/>
     <div className="container my-3" >
      {/* either we ca passs heading like this */}
      {/* <h1>text area</h1> */}

       {/*or we can pass heading as a prop like....*/}
     {/* <Textform heading = "Enter the text below to analyze"/> */}
     <About/>

     
     </div>
   </>
  );
}

export default App;
