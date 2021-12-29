import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import "../css/apidata.css";
function Apidata() {
  const logout = () => {
    auth.signOut();
  };
  // const [datas, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  //   // Update the document title using the browser API
  // }, []);
  // const getData = async () => {
  //   const response = await fetch(
  //     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  //   );
  //   const data = await response.json();
  //   setData(data);
  //   console.log(datas);
  // };

  return (
    <>
      <div>
        Welcome
        {auth.currentUser.email}
        <button onClick={logout} className="btn btn-primary">
          logout
        </button>
      </div>
      {/* <div className="container crypto_data">
        <form class="d-flex search_form mx-auto">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="search_button" type="submit">
            Search
          </button>
        </form>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Logo</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Add to Favourites</th>
            </tr>
          </thead>
          {datas.map((d) => (
            <tbody>
              <tr>
                <td>
                  {" "}
                  <img
                    src={d.image}
                    className="img-container"
                    alt="image"
                  ></img>
                </td>
                <td>{d.name}</td>
                <td>{d.current_price}</td>
                <td>
                  <button className="btn btn-primary"></button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div> */}
    </>
  );
}

export default Apidata;
