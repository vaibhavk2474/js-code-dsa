const https = require("https");

// 1. callback function: handle async code with callback function

// using setTimeout
// create a function which takes callback
// const asyncHandler = (callback) => {
//   setTimeout(() => {
//     callback(null, "done");
//   }, 3000);
// };

// 1. call one time
// asyncHandler((err, res) => {
//   if (err) {
//     console.log("error: ", err);
//   } else {
//     console.log("res:", res);
//   }
// });

// 1.1 all two times one after another
// asyncHandler((err, res) => {
//   if (err) {
//     console.log("error: ", err);
//   } else {
//     console.log("res:", res);

//     asyncHandler((err, res) => {
//       if (err) {
//         console.log("error: ", err);
//       } else {
//         console.log("res:", res);
//       }
//     });
//   }
// });

// ...............................................

// use Promise
// create a function which takes callback
const asyncHandler = ({ apiURL, path }, callback) => {
  console.log("asyncHandler 1", path);

  const options = {
    hostname: apiURL,
    // port: 443,
    path: path,
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log("asyncHandler 2", path);

    let data = "";

    res.on("data", (chunk) => {
      console.log("asyncHandler 3", path);

      data += chunk;
    });

    res.on("end", () => {
      console.log("asyncHandler 4", path);

      callback(null, data);
    });
  });

  req.on("error", (e) => {
    callback(e);
  });

  console.log("asyncHandler 5", path);

  req.end();
};

// 1. call one time
// asyncHandler(
//   {
//     apiURL: "jsonplaceholder.typicode.com",
//     path: "/todos/1",
//   },
//   (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//     } else {
//       console.log("res:", res);
//     }
//   }
// );

// 1.1 all two times one after another

console.log(1);
asyncHandler(
  {
    apiURL: "jsonplaceholder.typicode.com",
    path: "/todos/1",
  },
  (err, res) => {
    console.log(2);

    if (err) {
      console.log("error: ", err);
    } else {
      console.log(3);

      console.log("res:", res);

      asyncHandler(
        {
          apiURL: "jsonplaceholder.typicode.com",
          path: "/todos/2",
        },

        (err, res) => {
          console.log(4);

          if (err) {
            console.log("error: ", err);
          } else {
            console.log(5);

            console.log("res:", res);

            asyncHandler(
              {
                apiURL: "jsonplaceholder.typicode.com",
                path: "/todos/5",
              },
              (err, res) => {
                console.log(6);

                if (err) {
                  console.log("error: ", err);
                } else {
                  console.log(7);

                  console.log("res:", res);
                }
              }
            );
          }
        }
      );
    }
  }
);

console.log(8);
