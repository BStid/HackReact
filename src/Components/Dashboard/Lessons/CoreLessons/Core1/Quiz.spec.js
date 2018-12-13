import React from "react";
import { mount } from "enzyme";
import Quiz from "./Quiz";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// describe("Quiz", () => {
//   it("should mount with state", () => {
//     const wrapper = shallow(<Quiz />);
//     expect(wrapper.state("finished")).toBe(false);
//     expect(wrapper.state("correct")).toBe(0);
//     expect(wrapper.state("progress")).toBe(0);
//   });
// });

describe("Quiz - Axios/Mounting", () => {
  const spy = jest.spyOn(Quiz.prototype, "getQuiz");
  const wrapper = mount(<Quiz />);
  const mockData = [{ answers: ["a", "b", "c", "d"] }];

  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("/api/quiz/1").reply(200, mockData);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
  });

  it("calls the getQuiz function", () => {
    expect(spy).toHaveBeenCalled();
  });

  it("sets the quiz info to state", () => {
    expect(wrapper.state().quiz_info).toEqual(mockData);
  });
});
