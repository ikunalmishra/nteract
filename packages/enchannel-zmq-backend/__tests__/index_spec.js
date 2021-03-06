import {
  createControlSubject,
  createStdinSubject,
  createIOPubSubject,
  createShellSubject
} from "..";

// Solely testing the exported interface on the built ES5 JavaScript
describe("the built version of enchannel-zmq-backend", () => {
  it("exports create helpers for control, stdin, iopub, and shell", () => {
    expect(createControlSubject).toBeDefined();
    expect(createStdinSubject).toBeDefined();
    expect(createIOPubSubject).toBeDefined();
    expect(createShellSubject).toBeDefined();
  });
});
