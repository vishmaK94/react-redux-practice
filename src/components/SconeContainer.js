import React from "react";
import { connect } from "react-redux";
import { buyScone, sellScone } from "../redux";

const SconeContainer = ({ numOfScones, buyScone, sellScone }) => {
  return (
    <div>
      <h2>Available Scones: {numOfScones}</h2>
      <div>
        <button onClick={buyScone}>Buy Scone</button>
        <button onClick={sellScone}>Sell Scone</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfScones: state.scone.numOfScones
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyScone: () => dispatch(buyScone()),
    sellScone: () => dispatch(sellScone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SconeContainer);
