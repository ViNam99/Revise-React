import React, { Component } from "react";
import { GioHangContext } from "../../common/contexts/GioHangContext";

class ChitietSanPham extends Component {
  renderChitietSanPham = (context) => {
    const { chitietSanPham } = context;
    return (
      <div className="row mt-5">
        <div className="col-lg-6">
          <img
            src={chitietSanPham.image}
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
                <td>{chitietSanPham.name}</td>
              </tr>
              <tr>
                <th>Mô tả</th>
                <td>{chitietSanPham.description}</td>
              </tr>
              <tr>
                <th>Giá</th>
                <td>{chitietSanPham.price}</td>
              </tr>
              <tr>
                <th>Hàng tồn</th>
                <td>{chitietSanPham.invetory}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    return (
      <GioHangContext.Consumer>
        {(context) => {
          return <>{this.renderChitietSanPham(context)}</>;
        }}
      </GioHangContext.Consumer>
    );
  }
}

export default ChitietSanPham;
