import React from 'react';

import styles from './Button.module.css'; // This syntax is for CSS modules

// import styled from 'styled-components';
// This syuntax is called as tagged template literal. This is a default JavaScript feature. 
// "button" is simply a method of the "styled" object. This styled has methods for all HTML elements. To execute the button method, we use `` instead of ();. This button methods return new button component.
// We do not have the place where we set up the classes, so the styling will pass between the opening and closing back tick and will directly effect this button. That is why we delete selector in this back tick.
// The button which is returned all to by default applies all the props we might be passing to out own button component
// const Button = styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width:768px) {
//     width:auto;
//   }

//   // for pseudo selectors, we can use "&"
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    // "className={styles} -> The thing importing from the CSS file turns out to be an object. Every class we defined in the CSS file as a property  "
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
