import React, { useState, ChangeEvent } from "react";

import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";
import Dropdown from "./components/Dropdown/Dropdown";
import "./App.css";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = ["Apple", "Banana", "Carrot", "Dates"];

  const handleClick = () => {
    alert("Button was clicked!");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = (val: React.SetStateAction<string>) => {
    setSelectedOption(val);
  };

  return (
    <div className="App">
      <span className="heading">UI Component Library</span>

      <div className="btn-container">
        <Button label={"Button"} onClick={handleClick} />
        <Button label={"Large"} onClick={handleClick} className="large" />
        <Button label={"Small"} onClick={handleClick} className="small" />
        <Button label={"Primary"} onClick={handleClick} className="primary" />
        <Button
          label={"Secondary"}
          onClick={handleClick}
          className="secondary"
        />
      </div>

      <div>
        <InputField
          type="text"
          label="Name"
          value={value}
          name="name"
          isValid={true}
          onChange={handleNameChange}
          placeholder="Please enter your name"
        />
      </div>

      <div className="dropdown-select">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onChange={(item) => handleSelect(item)}
        />
      </div>

      <div className="modal-trigger-container">
        <button className="modal-trigger" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && <Modal onClose={setIsOpen} isOpen={isOpen} />}
      </div>
    </div>
  );
};

export default App;
