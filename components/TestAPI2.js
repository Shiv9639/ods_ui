import React from 'react'

const TestAPI2 = () => {
  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData(
    "https://scs-generic-query-api-scs-dv.apps.ltosp4lwr.osp.ngco.com/api/generic-query-api",
    {
      query_id: "ODSDCTest",
      query_info: [
        {
          type: "Timestamp",
          value: "2022-03-29 09:54:10",
        },
        {
          type: "String",
          value: "(D030,D010,D020,D050)",
        },
      ],
    }
  ).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  return <div>TestAPI2</div>;
}

export default TestAPI2

