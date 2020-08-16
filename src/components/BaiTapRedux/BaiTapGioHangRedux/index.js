import React, { useEffect } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import ChitietSanPham from "./ChitietSanPham";
import { connect } from "react-redux";
import { getLocalStorageAction } from "../../../redux/actions/GioHangAct";

const BaiTapGioHangRedux = ({ ...props }) => {
  const { chitietSanPham, getLocalStorage, gioHang } = props;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gioHang"));
    if (data) getLocalStorage(data);
  }, [getLocalStorage]);

  const totalSL = gioHang.reduce((total, spGioHang) => {
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
        Giỏ Hàng ({totalSL})
      </p>
      <DanhSachSanPham />

      {Object.keys(chitietSanPham).length > 0 ? (
        <ChitietSanPham />
      ) : (
        <p className="text-danger text-center m-5">Không có sản phẩm nào!</p>
      )}
      <ModalGioHang />
    </div>
  );
};

const mapStateToProps = (state) => ({
  chitietSanPham: state.GioHangReducer.chitietSanPham,
  gioHang: state.GioHangReducer.gioHang,
});

const mapDispatchToProps = (dispatch) => ({
  getLocalStorage: (gioHang) => dispatch(getLocalStorageAction(gioHang)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapGioHangRedux);
