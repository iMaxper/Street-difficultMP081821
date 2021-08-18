import React from 'react';
import DataView from './components/DataView.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="header">Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough</h1>

      <DataView borough="Staten Island" renterCost="14292" ownerCost="29752" renterIncome="37882" ownerIncome="94177" renterCostRatio="" ownerCostRatio=""/>
      <DataView borough="Queens" renterCost="16812" ownerCost="29256" renterIncome="46549" ownerIncome="80144"renterCostRatio="" ownerCostRatio=""/>
      <DataView borough="Brooklyn" renterCost="15144" ownerCost="31908" renterIncome="40128" ownerIncome="83737" renterCostRatio="" ownerCostRatio=""/>
      <DataView borough="Manhattan" renterCost="18900" ownerCost="36252" renterIncome="62173" ownerIncome="142046" renterCostRatio="" ownerCostRatio=""/>
      <DataView borough="Bronx" renterCost="13176" ownerCost="28548"renterIncome="29302" ownerIncome="76454" renterCostRatio="" ownerCostRatio="" />
    </div>
  );
}

export default App;
