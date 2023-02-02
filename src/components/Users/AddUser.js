import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const eyeInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredEyeColour = eyeInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredEyeColour.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid stuff.",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age. (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredEyeColour);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    eyeInputRef.current.value = '';
  };
    const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <label htmlFor="eye">Eye Colour</label>
          <input
              id="eye"
              type="text"
              ref={eyeInputRef}
          />
          <Button content="Add user" />
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
