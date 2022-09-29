import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color:${props => props.invalid ? "red" : "black"};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? "red" : "#ccc"};
//     background-color: ${props => props.invalid ? "rgb(255, 159, 159)" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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
      {/* styles['form-control'] has the same meanig as styles.form-control bacause the styles is object */}
      {/* To add inline syntax, we use back tick. The first value we want to inject is resolved className.   */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>

      {/* `` is template literal. ${} between thse curly braces can be any Javascript expression.  */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div> */}

      {/* If the user entered somethign invalid, we want to add a red border and a slightly red background to the input and also a red color to that label. */}
      {/* Inline style takes very high priority and override the styles set in  CSS file, so inline style might not be good. */}
      {/* <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            backgroundColor: !isValid ? "#fad0d0" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div> */}
    </form>
  );
};

export default CourseInput;
