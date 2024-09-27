import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './HomePage';
import { Page1 } from './page1';
import { Page2 } from './page2';
import { Page4 } from './page4';




function App() {

  

  return (
  


    <div className="App">
    

      <h1 className="heading">Welcome to Library Scheduler!</h1>
      <h3 className="subheading">Let's plan your reading schedule...</h3>




      
    

    <Router>
      <Routes>

        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page4" element={<Page4/>}/>
        </Route>
       
      </Routes>
    </Router>


     
      
    </div>

    

  );
}

export default App;
