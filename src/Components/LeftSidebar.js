import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

// import {scrolldown} from './Rightsidebar'

function LeftSidebar({ SetThings }) {
  let [Fname, setFname] = useState();
  let [Mname, setMname] = useState();
  let [Lname, setLname] = useState();
  let [Feed, setFeed] = useState();
  var [gen, setGen] = useState();
  var g;

  return (
    <>
      <div className="LeftSide">
        <p>🔴🟡🟢 </p>{" "}
        <b>
          <p style={{ display: "inline", color: "black" }}>
            Enter Your Feedback
          </p>
        </b>
        <hr />
        <div className="LeftSideInner">
          <form id="form1">
            <lable>
              First Name{" "}
              <b>
                <p style={{ display: "inline", color: "red" }}>*</p>
              </b>{" "}
            </lable>
            <br />

            <input
              type="text"
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            <br />

            <lable>Middle Name</lable>
            <br />

            <input
              type="text"
              onChange={(e) => {
                setMname(e.target.value);
              }}
            />
            <br />

            <lable>
              {" "}
              Last Name{" "}
              <b>
                <p style={{ display: "inline", color: "red" }}>*</p>
              </b>{" "}
            </lable>
            <br />
            <input
              type="text"
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
            <br />
            <lable>
              Gender{" "}
              <b>
                <p style={{ display: "inline", color: "red" }}>*</p>
              </b>{" "}
            </lable>
            <div style={{ display: "inline" }}>
              <label class="containe">
                <input
                  id="M"
                  onChange={() => {
                    setGen("male");
                  }}
                  type="radio"
                  name="radio"
                />
                Male
              </label>
              <label class="containe">
                <input
                  id="F"
                  onChange={() => {
                    setGen("female");
                  }}
                  type="radio"
                  name="radio"
                />
                Female
              </label>
            </div>
            <br />
            <br />

            <lable>
              Feedback{" "}
              <b>
                <p style={{ display: "inline", color: "red" }}>*</p>
              </b>{" "}
            </lable>
            <br />
            <textarea
              onChange={(e) => {
                setFeed(e.target.value);
              }}
              className="TeAr"
              style={{}}
              type="text"
            />
            <br />
          </form>

          <div className="Buttons">
            <button
              class="Btn"
              type="submit"
              onClick={() => {
                if (gen == "male") {
                  g = "👦🏻 𝗠𝗿.  →   ";
                } else if (gen == "female") {
                  g = "👩🏻 𝗠𝘀.  →   ";
                } else {
                  g = "nope";
                }

                if (Mname == undefined) {
                  Mname = "";
                }

                if (Fname == undefined) {
                  alert("⭕ Enter First name ");
                } else if (Lname == undefined) {
                  alert("⭕ Enter Last name ");
                } else if (Feed == undefined) {
                  alert("⭕ Enter your Feedback ");
                } else if (g == "nope") {
                  alert("⭕ Select Gender ");
                } else if (Fname.length > 40) {
                  alert("⭕ Max First name length is  40");
                } else if (Mname.length > 40) {
                  alert("⭕ Max Middle name length is  40");
                } else if (Lname.length > 40) {
                  alert("⭕ Max Last name length is  40");
                } else {
                  document.getElementById("form1").reset();

                  SetThings((prev) => {
                    var First = Fname;
                    var Middle = Mname;
                    var Last = Lname;
                    var Feedback = Feed;

                    setFname(undefined);
                    setMname(undefined);
                    setLname(undefined);
                    setFeed(undefined);

                    return [
                      ...prev,
                      {
                        name: g + " " + First + " " + Middle + " " + Last,
                        feed: Feedback,
                      },
                    ];
                  });
                }
              }}
            >
              Submit
            </button>
            <p className="space"> </p>
            <button
              class="Btn"
              onClick={() => {
                document.getElementById("form1").reset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSidebar;
