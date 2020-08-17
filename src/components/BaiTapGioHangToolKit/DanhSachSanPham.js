import React from "react";
import { useSelector } from "react-redux";
import SanPhamGioHang from "./SanPhamGioHang";
const DanhSachSanPham = () => {
  const { danhSachSP } = useSelector((state) => state.GioHangReducer);
  const renderDanhSachSanPham = () => {
    let result = null;
    if (danhSachSP.length < 0) return result;
    return (result = danhSachSP.map((item, index) => {
      return <SanPhamGioHang sanpham={item} key={index} />;
    }));
  };
  return <div className="row">{renderDanhSachSanPham()}</div>;
};

export default DanhSachSanPham;
