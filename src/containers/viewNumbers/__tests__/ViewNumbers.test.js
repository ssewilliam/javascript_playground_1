import React from "react";
import { mount, shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";

import ViewNumbers from "../index";
import { Input } from "../../generateNumbers";

describe("ViewNumbers", () => {
  let wrapper, parentWrapper;

  beforeEach(() => {
    parentWrapper = mount(
      <BrowserRouter>
        <ViewNumbers />
      </BrowserRouter>
    );

    wrapper = parentWrapper.find(ViewNumbers);
  });

  it("should render correctly", () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show Alert with the right state", () => {
    let shallowWrapper = shallow(<ViewNumbers />);
    shallowWrapper.setState({
      hasError: true
    });
    let alert = shallowWrapper.find(Alert);
    expect(shallowWrapper.state().hasError).toEqual(true);
    expect(alert).toHaveLength(1);
  });

  it("should close the alert box when close button is clicked", () => {
    let shallowWrapper = shallow(<ViewNumbers />);
    shallowWrapper.setState({ hasError: true });

    let alert = shallowWrapper.find(Alert);
    expect(shallowWrapper.state().hasError).toEqual(true);
    expect(alert).toHaveLength(1);

    alert.simulate("close");
    expect(shallowWrapper.state().hasError).toEqual(false);
    let alertClosed = shallowWrapper.find(Alert);
    expect(alertClosed).toHaveLength(0);
  });

  describe("newNumberRage", () => {
    let inputField, input;
    beforeEach(() => {
      input = wrapper.find(Input);
      inputField = input.find("input#numberChange");
    });

    it("should be called when text is changed in the input field", () => {
      const spyNewNumberRage = jest.spyOn(wrapper.instance(), "newNumberRage");
      wrapper.instance().forceUpdate();
      inputField.simulate("change", {
        target: { value: "100", name: "range" }
      });
      expect(input.length).toEqual(1);
      expect(wrapper.state().range).toEqual("100");
      expect(spyNewNumberRage).toHaveBeenCalled();
    });

    it("should change the state when the text input changes", () => {
      inputField.simulate("change", {
        target: { value: "10", name: "range" }
      });
      expect(wrapper.state().counter).toEqual(1);
      expect(wrapper.state().range).toEqual("10");
      expect(wrapper.state().hasError).toEqual(false);
    });

    it("should properly handle the values greater than 10000", () => {
      inputField.simulate("change", {
        target: { value: "100000", name: "range" }
      });
      expect(wrapper.state().counter).toEqual(undefined);
      expect(wrapper.state().range).toEqual(undefined);
      expect(wrapper.state().hasError).toEqual(true);
    });

    it("should properly handle empty strings", () => {
      inputField.simulate("change", {
        target: { value: "   ", name: "range" }
      });
      expect(wrapper.state().counter).toEqual(undefined);
      expect(wrapper.state().range).toEqual(undefined);
      expect(wrapper.state().hasError).toEqual(true);
    });

    it("should properly handle non numerics", () => {
      inputField.simulate("change", {
        target: { value: "10o0", name: "range" }
      });
      expect(wrapper.state().counter).toEqual(undefined);
      expect(wrapper.state().range).toEqual(undefined);
      expect(wrapper.state().hasError).toEqual(true);
    });

    it("should properly handle values less than 1", () => {
      inputField.simulate("change", {
        target: { value: "-1000", name: "range" }
      });
      expect(wrapper.state().counter).toEqual(undefined);
      expect(wrapper.state().range).toEqual(undefined);
      expect(wrapper.state().hasError).toEqual(true);
    });

    it("should call handleSetShow with True", () => {
      const spyHandleSetShow = jest.spyOn(wrapper.instance(), "handleSetShow");
      inputField.simulate("change", {
        target: { value: "-1000", name: "range" }
      });
      expect(spyHandleSetShow).toHaveBeenCalled();
      expect(wrapper.state().range).toEqual(undefined);
      expect(wrapper.state().hasError).toEqual(true);
      expect(spyHandleSetShow).toHaveBeenCalledWith(true);
    });
  });

  describe("handleGenerate", () => {
    let buttonField, inputField;
    beforeEach(() => {
      buttonField = wrapper.find("button");
      inputField = wrapper.find("input#numberChange");
    });

    it("should set the right state with the right values", () => {
      const spyHandleSetShow = jest.spyOn(wrapper.instance(), "handleSetShow");
      buttonField.simulate("click");
      expect(spyHandleSetShow).toHaveBeenCalled();
      expect(wrapper.state().Numbers).toEqual(undefined);

      const spyHandleGenerate = jest.spyOn(
        wrapper.instance(),
        "handleGenerate"
      );
      inputField.simulate("change", { target: { value: "5", name: "range" } });
      buttonField.simulate("click");
      expect(spyHandleGenerate).toHaveBeenCalled();
      expect(spyHandleGenerate).toHaveBeenCalledWith(1, "5");
      expect(wrapper.state().Numbers.length).toEqual(5);
    });
  });
});

function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}

describe("drinkAll", () => {
  test("drinks something lemon-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("does not drink something octopus-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });
});
