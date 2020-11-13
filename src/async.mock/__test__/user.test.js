import Axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const response = { data: { username: "max", password: "?!cym2293" } };
    Axios.post.mockResolvedValue(response);
    await expect(register("max", "?!cym2293")).resolves.toEqual({
      username: "max",
      password: "?!cym2293",
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    await expect(register("max", "?!cym2293")).rejects.toThrow(Error);
  });
});
