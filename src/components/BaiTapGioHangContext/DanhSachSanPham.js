import React, { Component } from "react";
import { GioHangContext } from "../../common/contexts/GioHangContext";
import SanPhamGioHang from "./SanPhamGioHang";

class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDanhSachSanPham = (context) => {
    const { danhSachDienThoai } = context;
    let result = null;
    if (danhSachDienThoai.length < 0) return result;
    return (result = danhSachDienThoai.map((item, index) => {
      return <SanPhamGioHang sanpham={item} key={index} />;
    }));
  };
  render() {
    return (
      <GioHangContext.Consumer>
        {(context) => {
          return (
            <div className="row">{this.renderDanhSachSanPham(context)}</div>
          );
        }}
      </GioHangContext.Consumer>
    );
  }
}

export default DanhSachSanPham;
