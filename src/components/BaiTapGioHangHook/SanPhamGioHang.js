import React from "react";

const SanPhamGioHang = ({ ...props }) => {
  const { sanpham, handleMuaSanPhamDS } = props;

  const handleXemChiTiet = (sp) => {
    props.handleXemChiTietDS(sp);
  };

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
            onClick={() => handleXemChiTiet(sanpham)}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleMuaSanPhamDS(sanpham)}
          >
            Mua
          </button>
        </div>
      </div>
    </div>
  );
};

export default SanPhamGioHang;
