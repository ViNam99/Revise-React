import React, { Component, createContext } from "react";
import listDTJson from "../../utils/danhSachDienThoai.json";
const GioHangContext = createContext(null);

class GioHangProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhSachDienThoai: listDTJson,
      chitietSanPham: {},
      gioHang: [],
      xemChitietSanPham: this.handleXemChitietSanPham,
      muaSanPham: this.handleMuaSanPham,
      xoaSanPham: this.handleXoaSanPham,
      tangGiamSL: this.handleTangGiamSL,
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("gioHang"));
    if (data) {
      this.setState({
        gioHang: data,
      });
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.gioHang !== this.state.gioHang) {
      localStorage.setItem("gioHang", JSON.stringify(this.state.gioHang));
    }
  }

  findIndexBySanPhamID = (arr, id) => {
    return arr.findIndex((elm) => elm.id === id);
  };

  handleXemChitietSanPham = (sanpham) => {
    this.setState({
      chitietSanPham: sanpham,
    });
  };

  handleMuaSanPham = (sanpham) => {
    const listSanPhamGioHang = [...this.state.gioHang];
    const sanphamGioHang = {
      id: sanpham.id,
      name: sanpham.name,
      image: sanpham.image,
      soLuong: 1,
      price: sanpham.price,
    };
    const index = this.findIndexBySanPhamID(
      listSanPhamGioHang,
      sanphamGioHang.id
    );
    index !== -1
      ? (listSanPhamGioHang[index].soLuong += 1)
      : listSanPhamGioHang.push(sanphamGioHang);
    this.setState({
      gioHang: listSanPhamGioHang,
    });
  };

  handleXoaSanPham = (id) => {
    const listSanPhamGioHang = [...this.state.gioHang];
    const index = this.findIndexBySanPhamID(listSanPhamGioHang, id);
    if (index !== -1) listSanPhamGioHang.splice(index, 1);
    this.setState({
      gioHang: listSanPhamGioHang,
    });
  };

  handleTangGiamSL = (id, bool) => {
    const listSanPhamGioHang = [...this.state.gioHang];
    const index = this.findIndexBySanPhamID(listSanPhamGioHang, id);
    if (index === -1) return null;
    if (bool) listSanPhamGioHang[index].soLuong += 1;
    if (!bool) listSanPhamGioHang[index].soLuong -= 1;
    if (listSanPhamGioHang[index].soLuong < 1)
      listSanPhamGioHang.splice(index, 1);
    this.setState({
      gioHang: listSanPhamGioHang,
    });
  };
  
  render() {
    return (
      <GioHangContext.Provider value={this.state}>
        {this.props.children}
      </GioHangContext.Provider>
    );
  }
}

export { GioHangContext, GioHangProvider };
