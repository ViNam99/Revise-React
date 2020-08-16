import React from "react";
import { connect } from "react-redux";
import SanPhamGioHang from "./SanPhamGioHang";
const DanhSachSanPham = ({ ...props }) => {
  const { listGioHang } = props;
  const renderDanhSachSanPham = () => {
    let result = null;
    if (listGioHang.length < 0) return result;
    return (result = listGioHang.map((item, index) => {
      return <SanPhamGioHang sanpham={item} key={index} />;
    }));
  };
  return <div className="row">{renderDanhSachSanPham()}</div>;
};
const mapStateToProps = (state) => ({
  listGioHang: state.GioHangReducer.listGioHang,
});
export default connect(mapStateToProps, null)(DanhSachSanPham);
