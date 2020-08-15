import React, { useState } from "react";
import danhSachSP from "../../utils/danhSachDienThoai.json";
import SanPhamGioHang from "./SanPhamGioHang";

const DanhSachSanPham = ({ ...props }) => {
  const [listSanPham] = useState(danhSachSP);

  const handleXemChiTiet = (sp) => {
    props.handleXemChiTietRoot(sp);
  };

  const handleMuaSanPham = sp => {
     props.handleMuaSanPhamRoot(sp);
  }
  const renderListSanPham = () => {
    let result = null;
    if (listSanPham.length < 0) return result;
    return (result = listSanPham.map((item, index) => {
      return (
        <SanPhamGioHang
          sanpham={item}
          key={index}
          handleXemChiTietDS={handleXemChiTiet}
          handleMuaSanPhamDS = {handleMuaSanPham}
        />
      );
    }));
  };
  return <div className="row">{renderListSanPham()}</div>;
};

export default DanhSachSanPham;
