// import {BrowserRouter,Routes,Route}from "react-router-dom";
// import Navbar from "./Components/Navbar"
// import ProductCard from "./Components/ProductCard"
// import Page from "./Components/Page"
// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route exact path ="/" element={<ProductCard/>}/>
//         <Route path="/cart" element={<Page/>}/>
//       </Routes>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbars from './Components/Navbars'
import Products from './Components/Products'
import Data from './Components/Data'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbars/>
       <Routes>
         <Route exact path ="/" element={<Products/>}/>
         <Route path="/data" element={<Data/>}/>
       </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App