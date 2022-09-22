import React from "react";

const Home = () => {
  return (
    <div className="row">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/images/menu.png`}
          alt="menu"
        />
      </div>
      <div className="col-8">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Order Item</th>
              <th>Price</th>
              <th>On 5% promo?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="form-control" type="text" />
              </td>
              <td>
                <input className="form-control" type="text" />
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                </div>
              </td>
              <td>
                <button className="btn btn-primary">Place Order</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-center">Attending Clerks Mercy Marsh</p>
        <table className="table w-75">
          <thead className="table-dark">
            <tr>
              <th>Order Item</th>
              <th>Price</th>
              <th>On 5% promo?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Today's Brew</td>
              <td>5</td>
              <td></td>
              <td>
                <a href="#">Edit</a> | <a href="#">Delete</a>
              </td>
            </tr>
            <tr>
              <td>Hot Chocolate</td>
              <td>3.5</td>
              <td></td>
              <td>
                <a href="#">Edit</a> | <a href="#">Delete</a>
              </td>
            </tr>
            <tr>
              <td>Chicken</td>
              <td>3.2</td>
              <td></td>
              <td>
                <a href="#">Edit</a> | <a href="#">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
