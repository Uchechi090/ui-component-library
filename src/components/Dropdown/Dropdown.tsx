import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { FaAngleDown } from "react-icons/fa6";

import "./Dropdown.css";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedOption);

  const containerRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (!containerRef?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [containerRef]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const onInputClick = () => {
    setOpen(!open);
  };

  const onOptionSelected = (option: string) => {
    onChange !== undefined && onChange(option);
    onChange !== undefined && setInputValue(option);
    setOpen(false);
  };

  return (
    <div data-testid="dropdown-container" className="dropdown-container" ref={containerRef}>
      <div data-testid="input-container" className="input-container" onClick={onInputClick}>
        <input
          data-testid="input"
          type="text"
          value={inputValue}
          placeholder={"Select an option"}
          onChange={onInputChange}
        />
        <div className="input-arrow-container">
          <FaAngleDown className="input-arrow" />
        </div>
      </div>
      {open ? (
        <div data-testid="dropdown-list" className={`dropdown-list ${open ? "visible" : ""}`}>
          {options.map((item) => (
            <div
              data-testid="dropdown-item"
              className="dropdown-item"
              key={item}
              onClick={() => onOptionSelected(item)}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
