import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { CheckBoxWithLabel } from "./App";
import { Login } from "./components/unauthenticatedApp";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   // const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();

// });

describe("Login Component test", () => {
  const login = shallow(<Login />);
  it("Should have a button component", () => {
    expect(login.find("button")).toHaveLength(1);

    //Button should be of type button
    expect(login.find("button").type()).toEqual("button");
    expect(login.find("button").text()).toEqual("LOGIN");
  });
  it("should have input for email and password", () => {
    expect(login.find("input#email")).toHaveLength(1);
    expect(login.find("input#password")).toHaveLength(1);
  });
});

// it('CheckboxWithLabel changes the text after click', () => {
//   const {queryByLabelText, getByLabelText} = render(
//     <CheckBoxWithLabel labelOn="on" labelOff="off" />
//   )

//     expect (queryByLabelText(/off/i)).toBeTruthy();
//     fireEvent.click(getByLabelText(/off/i));
//     expect(queryByLabelText(/on/i)).toBeTruthy();

// });
