import React, { Component } from "react";

class SanPhamGioHang extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // handleXemChiTiet = (sanpham) => {
  //     this.props.handleXemChiTietDS(sanpham);
  // };

  handleMuaSanPham = sanPham => {
      this.props.handleMuaSanPhamDS(sanPham);
  }
  render() {
    const { sanPham,handleXemChiTietDS } = this.props;
    return (
      <div className="col-lg-4 text-center">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={sanPham.image}
            className="card-img-top"
            alt="..."
            height="300px"
          />
          <div className="card-body">
            <h5 className="card-title">{sanPham.name}</h5>
            <p className="card-text">{sanPham.description}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success mr-5"
              onClick={() => handleXemChiTietDS(sanPham)}
            >
              Chi tiết
            </button>
            <button className="btn btn-primary" onClick = {() => this.handleMuaSanPham(sanPham)}>Mua</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SanPhamGioHang;
