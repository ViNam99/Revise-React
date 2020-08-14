import React, { Component } from "react";

class ChiTietSanPham extends Component {
  render() {
    const { chitiet } = this.props;
    return (
      <div className="row mt-5">
        <div className="col-lg-6">
          <img
            src={chitiet.image}
            className="card-img-top"
            alt="..."
            height="400px"
          />
        </div>
        <div className="col-lg-6">
          <table className="table">
            <tbody>
              <tr>
                <th>Tên điện thoại</th>
                <td>{chitiet.name}</td>
              </tr>
              <tr>
                <th>Mô tả</th>
                <td>{chitiet.description}</td>
              </tr>
              <tr>
                <th>Giá</th>
                <td>{chitiet.price}$</td>
              </tr>
              <tr>
                <th>Hàng tồn</th>
                <td>{chitiet.invetory}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ChiTietSanPham;
