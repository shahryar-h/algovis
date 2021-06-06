import React, { Component } from "react";

class Diagram extends Component {
  render() {
    const { userObj, sortedObj, userInputs, sortedInput } = this.props;
    console.log(sortedObj);
    return (
      <>
        <div className="sortItems">
          {sortedObj != []
            ? sortedObj.map((item, index) => {
                return (
                  <div
                    key={`sortItem-${item.sortPosiotion}`}
                    className={`sortItem sortItem${item.sortPosiotion}`}>
                    {item.userInput}
                  </div>
                );
              })
            : ""}
          <n />

          {/* <n />
          {userObj != []
            ? userObj.map((item, index) => {
                return (
                  <div
                    key={`sortItem-${item.sortPosiotion}`}
                    className={`sortItem sortItem${item.sortPosiotion}`}>
                    {item.userInput}
                  </div>
                );
              })
            : ""} */}
        </div>
        <div className="controls">
          <div className="userInput">user</div>
          <div className="sortedInput">sorted</div>
        </div>
      </>
    );
  }
}

export default Diagram;
