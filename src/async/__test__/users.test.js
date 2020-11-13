import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const users = [{ name: "Max" }];
    const reps = { data: users };

    axios.get.mockImplementation(() => Promise.resolve(reps));

    return getUsers().then((data) => expect(data).toEqual(users));
  });
});
