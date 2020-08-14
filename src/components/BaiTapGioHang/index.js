import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import ChiTietSanPham from "./ChiTietSanPham";

class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasChiTiet: false,
      chitietSanPham: {},
      showModal: false,
      listSPGioHang: [],
    };
  }

  componentDidMount() {
    const dataStorage = JSON.parse(localStorage.getItem("giohang"));
    if (dataStorage) {
      this.setState({
        listSPGioHang: dataStorage,
      });
    }
  }

  findIndexBySPId = (arr, id) => {
    return arr.findIndex((elm) => elm.id === id);
  };

  saveLocalStorage = (dsgh) => {
    return localStorage.setItem("giohang", JSON.stringify(dsgh));
  };

  handleXemChiTiet = (sp) => {
    this.setState({
      chitietSanPham: sp,
      hasChiTiet: true,
    });
  };

  handleMuaSanPham = (sp) => {
    const sanPhamGioHang = {
      id: sp.id,
      name: sp.name,
      image: sp.image,
      price: sp.price,
      soLuong: 1,
    };
    const danhSachSPGioHang = [...this.state.listSPGioHang];
    const index = this.findIndexBySPId(danhSachSPGioHang, sanPhamGioHang.id);
    index !== -1
      ? (danhSachSPGioHang[index].soLuong += 1)
      : danhSachSPGioHang.push(sanPhamGioHang);
    this.setState(
      {
        listSPGioHang: danhSachSPGioHang,
      },
      () => {
        this.saveLocalStorage(this.state.listSPGioHang);
      }
    );
  };

  handleXoaSP = (id) => {
    const danhSachSPGioHang = [...this.state.listSPGioHang];
    const index = this.findIndexBySPId(danhSachSPGioHang, id);
    if (index !== -1) {
      danhSachSPGioHang.splice(index, 1);
    }
    this.setState(
      {
        listSPGioHang: danhSachSPGioHang,
      },
      () => {
        this.saveLocalStorage(this.state.listSPGioHang);
      }
    );
  };

  handleTangGiamSL = (id, bool) => {
    const danhSachSPGioHang = [...this.state.listSPGioHang];
    const index = this.findIndexBySPId(danhSachSPGioHang, id);
    if (index !== -1) {
      if (bool) {
        danhSachSPGioHang[index].soLuong += 1;
      } else {
        if (danhSachSPGioHang[index].soLuong > 1) {
          danhSachSPGioHang[index].soLuong -= 1;
        } else {
          danhSachSPGioHang.splice(index, 1);
        }
      }
    }
    this.setState(
      {
        listSPGioHang: danhSachSPGioHang,
      },
      () => {
        this.saveLocalStorage(this.state.listSPGioHang);
      }
    );
  };

  render() {
    const totalSP = this.state.listSPGioHang.reduce((total, spGioHang) => {
      return (total += spGioHang.soLuong);
    }, 0);
    return (
      <div className="container">
        <h2 className="text-center p-5 bg-dark text-danger">
          Bài Tập Giỏ Hàng
        </h2>
        <p
          className="text-danger text-right"
          style={{ cursor: "pointer" }}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Giỏ Hàng ({totalSP})
        </p>
        <DanhSachSanPham
          handleXemChiTietRoot={this.handleXemChiTiet}
          handleMuaSanPhamRoot={this.handleMuaSanPham}
        />

        {this.state.hasChiTiet ? (
          <ChiTietSanPham chitiet={this.state.chitietSanPham} />
        ) : (
          <p className="text-danger text-center m-5">Không có sản phẩm nào!</p>
        )}

        <ModalGioHang
          listSPGioHang={this.state.listSPGioHang}
          handleTangGiamSLRoot={this.handleTangGiamSL}
          handleXoaSPRoot={this.handleXoaSP}
        />
      </div>
    );
  }
}

export default BaiTapGioHang;
