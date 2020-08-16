import React from "react";
import { connect } from "react-redux";
import {
  xemChiTietSanPhamAction,
  muaSanPhamAction,
} from "../../../redux/actions/GioHangAct";
const SanPhamGioHang = ({ ...props }) => {
  const { sanpham, xemChitietSanPham, muaSanPham } = props;

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
            onClick={() => xemChitietSanPham(sanpham)}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-primary"
            onClick={() => muaSanPham(sanpham)}
          >
            Mua
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  xemChitietSanPham: (sanpham) => dispatch(xemChiTietSanPhamAction(sanpham)),
  muaSanPham: (sanpham) => dispatch(muaSanPhamAction(sanpham)),
});
export default connect(null, mapDispatchToProps)(SanPhamGioHang);
