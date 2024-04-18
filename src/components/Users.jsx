import React, { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          console.warn(result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        setMode("offline");
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
      });
  }, []);
  return (
    <div>
      <div>
        {mode === "offline" ? (
          <div class="alert alert-warning" role="alert">
            you are in offline mode or some issue with connection
          </div>
        ) : null}
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title?.slice(0, 25)}</td>
              <td>{item?.body?.slice(0, 25)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
