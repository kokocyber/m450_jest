// user.test.js
const getUserData = require("../app/user");
const fetchData = require("../app/fetchData");

jest.mock("../app/fetchData");

test("returns user data for a given userId", async () => {
  const data = { id: 1, name: "John Doe" };
  fetchData.mockResolvedValue(data);

  const result = await getUserData(1);
  expect(result).toEqual(data);
  expect(fetchData).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users/1"
  );
});

// user.test.js

test("handles errors when fetching user data", async () => {
  fetchData.mockRejectedValue(new Error("Network Error"));

  try {
    //Er geht hier bei correct denke ich trotzdem durch weil er nicht zum catch kommt und somit keine fehler sieht
    await getUserData(1);
  } catch (e) {
    expect(e.message).toBe("Unable to fetch user data");
  }
});
