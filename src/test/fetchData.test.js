// fetchData.test.js
const fetchData = require("../app/fetchData");
const axios = require("axios");

jest.mock("axios");

test("fetches successfully data from an API", async () => {
  const data = { userId: 1, id: 1, title: "Test Title", body: "Test Body" };
  axios.get.mockResolvedValue({ data });

  const result = await fetchData(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(result).toEqual(data);
});

test("fetches erroneously data from an API", async () => {
  const errorMessage = "Network Error";
  axios.get.mockRejectedValue(new Error(errorMessage));

  try {
    await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  } catch (e) {
    expect(e.message).toBe(errorMessage);
  }
});
