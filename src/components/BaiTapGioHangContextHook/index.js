import React, { useContext, useEffect } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhSachSanPham from "./DanhSachSanPham";
import ChitetSanPham from "./ChitetSanPham";
import { GioHangContextHook } from "../../common/contexts/GioHangContextHook";
const BaiTapGioHangContextHook = () => {
  const {
    chitietSanPham,
    danhSachSanPhamGioHang,
    getLocalStorage,
  } = useContext(GioHangContextHook);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gioHang"));
    if (data) getLocalStorage(data);
  }, []);

  const totalSP = danhSachSanPhamGioHang.reduce((total, spGioHang) => {
    return (total += spGioHang.soLuong);
  }, 0);
  return (
    <div className="container">
      <h2 className="text-center p-5 bg-dark text-danger">
        Bài Tập Giỏ Hàng Hook
      </h2>
      <p
        className="text-danger text-right"
        style={{ cursor: "pointer" }}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Giỏ Hàng ({totalSP})
      </p>

      <DanhSachSanPham />

      {Object.keys(chitietSanPham).length > 0 ? (
        <ChitetSanPham />
      ) : (
        <p className="text-danger text-center m-5">Không có sản phẩm nào!</p>
      )}

      <ModalGioHang />
    </div>
  );
};

export default BaiTapGioHangContextHook;
