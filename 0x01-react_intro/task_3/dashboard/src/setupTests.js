// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// setupTests.js
import Enzyme from "enzyme";
import Adapter from "@dsaenko/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
