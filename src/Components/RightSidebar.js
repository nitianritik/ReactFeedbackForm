import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import ScrollIntoView from "react-scroll-into-view";

var a = 0;

function RightSidebar({ Things }) {
  const dummy = useRef();

  if (a >= 2) {
    dummy.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  a++;

  return (
    <div className="RightSide">
      <p className="rightMac" style={{}}>
        🔴🟡🟢
      </p>

      <div className="Cont">
        <b>
          <p style={{ display: "inline", color: "black" }}>Feedbacks</p>
        </b>
        <hr />
        <div className="Cont2" id="style-1">
          {Things.map((d) => {
            return (
              <div className="card" id="Card">
                <p>{d.name}</p>

                <p className="says">💬 Says → {d.feed}</p>
              </div>
            );
          })}

          <div className="C" ref={dummy}></div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
