import React, { Component } from "react";
import { GioHangContext } from "../../common/contexts/GioHangContext";

class SanPhamGioHang extends Component {
  renderDanhSachSanPham = (context, sanpham) => {
    return (
      <div className="col-lg-4 text-center">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={sanpham.image}
            className="card-img-top"
            alt="..."
            height="300px"
          />
          <div className="card-body">
            <h5 className="card-title">{sanpham.name}</h5>
            <p className="card-text">{sanpham.description}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success mr-5"
              onClick={() => context.xemChitietSanPham(sanpham)}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-primary"
              onClick={() => context.muaSanPham(sanpham)}
            >
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { sanpham } = this.props;
    return (
      <GioHangContext.Consumer>
        {(context) => {
          return <div>{this.renderDanhSachSanPham(context, sanpham)}</div>;
        }}
      </GioHangContext.Consumer>
    );
  }
}

export default SanPhamGioHang;
