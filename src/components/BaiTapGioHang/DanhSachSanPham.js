import React, { Component } from "react";
import listDienThoai from "../../utils/danhSachDienThoai.json";
import SanPhamGioHang from "./SanPhamGioHang";
class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSP: listDienThoai,
    };
  }

  handleXemChiTiet = (sp) => {
    this.props.handleXemChiTietRoot(sp);
  };

  handleMuaSanPham = (sp) => {
    this.props.handleMuaSanPhamRoot(sp);
  };
  renderListSP = () => {
    return this.state.listSP.map((item, index) => {
      return (
        <SanPhamGioHang
          sanPham={item}
          key={index}
          handleXemChiTietDS={this.handleXemChiTiet}
          handleMuaSanPhamDS={this.handleMuaSanPham}
        />
      );
    });
  };
  render() {
    return <div className="row">{this.renderListSP()}</div>;
  }
}

export default DanhSachSanPham;
