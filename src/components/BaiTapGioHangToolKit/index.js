import React, { useEffect } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import ChiTietSanPham from "./ChiTietSanPham";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorage } from "../../slice/GioHangSlice";

const BaiTapGioHangToolKit = () => {
  const dispatch = useDispatch();

  const { chitietSanPham, gioHang } = useSelector(
    (state) => state.GioHangReducer
  );

  const totalSP = gioHang.reduce((total, sp) => {
    return (total += sp.soLuong);
  }, 0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gioHang"));
    if (data) dispatch(getLocalStorage(data));
  }, [dispatch]);

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
        <ChiTietSanPham />
      ) : (
        <p className="text-danger text-center m-5">Không có sản phẩm nào!</p>
      )}

      <ModalGioHang />
    </div>
  );
};

export default BaiTapGioHangToolKit;
