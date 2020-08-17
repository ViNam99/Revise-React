import React from "react";
import { useDispatch } from "react-redux";
import { xemChiTiet, muaSanPham } from "../../slice/GioHangSlice";
const SanPhamGioHang = ({ ...props }) => {
  const dispatch = useDispatch();
  const { sanpham } = props;
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
            onClick={() => dispatch(xemChiTiet(sanpham))}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(muaSanPham(sanpham))}
          >
            Mua
          </button>
        </div>
      </div>
    </div>
  );
};

export default SanPhamGioHang;
