import React, { useContext } from "react";
import { GioHangContextHook } from "../../common/contexts/GioHangContextHook";
import SanPham from "./SanPham";

const DanhSachSanPham = () => {
  const { danhSachSanPham } = useContext(GioHangContextHook);

  const renderDanhSachSanPham = () => {
    let result = null;
    if (danhSachSanPham.length < 0) return result;
    return (result = danhSachSanPham.map((sp, index) => {
      return <SanPham sanpham={sp} key={index} />;
    }));
  };
  return <div className="row">{renderDanhSachSanPham()}</div>;
};

export default DanhSachSanPham;
