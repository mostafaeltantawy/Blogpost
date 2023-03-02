// const Page = require("./helpers/page");
// let page;
// beforeEach(async () => {
//   page = await Page.build();
//   await page.goto("http://localhost:3000");
// });
// afterEach(async () => {
//   await page.close();
// });

// describe("when logged in ", () => {
//   beforeEach(async () => {
//     await page.login();
//     await page.click("a.btn-floating");
//   });
//   test("Can see blog create form  ", async () => {
//     const label = await page.getContentsOf("form label");
//     expect(label).toEqual("Blog Title");
//   });
//   describe("using valid inputs", () => {
//     beforeEach(async () => {
//       await page.type(".title input", "My title");
//       await page.type(".content input", "My content");
//       await page.click("form button");
//     });
//     test("Submit takes user t review screen", async () => {
//       const text = await page.getContentsOf("h5");
//       expect(text).toEqual("Please confirm your entries");
//     });
//     test("Submetting then saving adds blog to index page ", async () => {
//       await page.click("button.green");
//       await page.waitForSelector(".card");
//       const title = await page.getContentsOf(".card-title");
//       const content = await page.getContentsOf("p");
//       expect(title).toEqual("My title");
//       expect(content).toEqual("My content");
//     });
//   });

//   describe("And using inavalid input", () => {
//     beforeEach(async () => {
//       await page.click("form button");
//     });
//     test("the form shows an error message", async () => {
//       const titleError = await page.getContentsOf(".title .red-text");
//       const contentError = await page.getContentsOf(".content .red-text");
//       expect(titleError).toEqual("You must provide a value");
//       expect(contentError).toEqual("You must provide a value");
//     });
//   });
// });

// describe("When user is not logged in ", () => {
//   test("User cannot create a blogpost", async () => {
//     const result = await page.evaluate(() => {
//       return fetch("/api/blogs", {
//         method: "POST",
//         credentials: "same-origin",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: "my title",
//           content: "my content",
//         }),
//       }).then((res) => res.json());
//     });
//     expect(result).toEqual({ error: "You must log in!" });
//   });
//   test("User cannot get a list of posts  ", async () => {
//     const result = await page.evaluate(() => {
//       return fetch("/api/blogs", {
//         method: "GET",
//         credentials: "same-origin",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }).then((res) => res.json());
//     });
//     expect(result).toEqual({ error: "You must log in!" });
//   });
// });
