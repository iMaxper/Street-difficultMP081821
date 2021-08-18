import React from 'react';
import './DataView.css';

function DataView(props) {
  return(
    <div className="view">
      <div className="view-column">
        <div className="borough">
          <h1 className="borough-text">{props.borough}</h1>
        </div>
      </div>
      <div className="view-column">
        <div className="data-view">
          <div className="data-view-column left right">
            <div className="text">
              <h3 className="text-header">Renters</h3>
            </div>
            <div className="text">
              <h2 className="text-data">${Number(props.renterCost).toLocaleString('en-US')}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </div>
            <div className="text">
              <h2 className="text-data">${Number(props.renterIncome).toLocaleString('en-US')}</h2>
              <h3 className="text-label">Annual Income</h3>
            </div>
            <div className="text bottom">
              <h2 className="text-data">{Math.round(Number(props.renterCost)/Number(props.renterIncome)*100)}%</h2>
              <h3 className="text-label">Cost to Income Ratio</h3>
            </div>
          </div>
          <div className="data-view-column right">
            <div className="text">
              <h3 className="text-header">Homeowners</h3>
            </div>
            <div className="text">
              <h2 className="text-data">${Number(props.ownerCost).toLocaleString('en-US')}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </div>
            <div className="text">
              <h2 className="text-data">${Number(props.ownerIncome).toLocaleString('en-US')}</h2>
              <h3 className="text-label">Annual Income</h3>
            </div>
            <div className="text bottom">
              <h2 className="text-data">{Math.round(Number(props.ownerCost)/Number(props.ownerIncome)*100)}%</h2>
              <h3 className="text-label">Cost to Income Ratio</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataView;
