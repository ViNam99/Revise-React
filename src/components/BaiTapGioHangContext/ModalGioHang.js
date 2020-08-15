import React, { Component } from "react";
import { GioHangContext } from "../../common/contexts/GioHangContext";

class ModalGioHang extends Component {
  renderSanPhamTrongGioHang = (context) => {
    const { gioHang, xoaSanPham, tangGiamSL } = context;
    let result = null;
    if (gioHang.length < 0) return result;
    return (result = gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.id}</td>
          <td>{sp.name}</td>
          <td>
            <img src={sp.image} alt="img" width="50px" height="50px" />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => tangGiamSL(sp.id, false)}
            >
              -
            </button>
            {sp.soLuong}
            <button
              className="btn btn-primary ml-2"
              onClick={() => tangGiamSL(sp.id, true)}
            >
              +
            </button>
          </td>
          <td>{sp.price}</td>
          <td>{sp.price * sp.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaSanPham(sp.id)}
            >
              X
            </button>
          </td>
        </tr>
      );
    }));
  };

  render() {
    return (
      <GioHangContext.Consumer>
        {(context) => {
          return (
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Giỏ Hàng
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>{this.renderSanPhamTrongGioHang(context)}</tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </GioHangContext.Consumer>
    );
  }
}

export default ModalGioHang;
