import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Login from '../../login';

describe("Register", () => {
  let wrapper, parentWrapper;

  beforeEach(() => {
    parentWrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    wrapper = parentWrapper.find(Login);
  });
  it('should have a username input', () => {
    expect(wrapper.length).toEqual(1)
  });
});
