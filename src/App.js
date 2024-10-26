import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header'; 
import Footer from './footer';
import Dairy from './dairy';
import Paper from './paper';
import Snacks from './snacks';
import Hukkah from './hukkah';
import Mouth from './mouth';
import Cold from './cold';
import Candies from './candies';
import Ata from './ata'; 
import Banner from './banner';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Dairy />
            <Paper />
            <Snacks />
            <Hukkah />
            <Mouth />
            <Cold />
            <Candies />
          </>
        } />
        <Route path="/ata" element={<Ata />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
