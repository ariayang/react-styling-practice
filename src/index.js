//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const myDay = new Date(2019, 1, 1, 10);
const hour = myDay.getHours();
var display = "";

const headingColor = {
  color: "red"
};

if (hour < 12) {
  display = "Good morning";
} else if (hour < 18) {
  display = "Good Afternoon";
  headingColor.color = "green";
} else {
  display = "Good evening";
  headingColor.color = "blue";
}

ReactDOM.render(
  <h1 style={{ color: headingColor.color }}>{display} </h1>,
  document.getElementById("root")
);
