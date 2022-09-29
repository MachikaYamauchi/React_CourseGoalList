import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // to set the indicator for whatever the user entered something valid or not.
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // The trim() method removes whitespace from both sides of a string.
    // If sentence means if the input is essentially empty, return; -> the line of code "props.onAddGoal(enteredValue);" will not be executed
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    // Pass the enteredValue to the App Compo
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* If the user entered somethign invalid, we want to add a red border and a slightly red background to the input and also a red color to that label. */}
        {/* Inline style takes very high priority and override the styles set in  CSS file, so inline style might not be good. */}
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            backgroundColor: !isValid ? "#fad0d0" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
