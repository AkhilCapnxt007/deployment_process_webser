import React, { useEffect, useState } from "react";

function FetchRequest() {
  const [data, setdata] = useState(null);

  const fetchData = async (e) => {
    let requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let fetchedObj = await fetch(`http://localhost:4000`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("fetched");
        setdata(data);
        return data;
      })
      .catch((error) => console.log("error", error));

    console.log(fetchedObj);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>
  
  <h2>fetching data ...</h2>
  <li>{JSON.stringify(data)}</li>
  </>;
}

export default FetchRequest;
