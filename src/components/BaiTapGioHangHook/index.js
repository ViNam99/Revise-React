import React, { useState, useEffect } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ChitietSanPham from "./ChitietSanPham";
import ModalGioHang from "./ModalGioHang";

const BaiTapGioHangHook = () => {
  const [hasChiTiet, setHasChiTiet] = useState(false);
  const [chitietSanPham, setChitietSanPham] = useState({});
  const [listSanPhamTrongGioHang, setListSanPhamTrongGioHang] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gioHang"));
    if (data) setListSanPhamTrongGioHang(data);
  }, []);

  useEffect(() => {
    if (listSanPhamTrongGioHang)
      localStorage.setItem("gioHang", JSON.stringify(listSanPhamTrongGioHang));
  }, [listSanPhamTrongGioHang]);

  const handleXemChiTiet = (sp) => {
    setHasChiTiet(true);
    setChitietSanPham(sp);
  };

  const finIndexBySanPhamID = (arr, id) => {
    return arr.findIndex((elm) => elm.id === id);
  };

  const handleMuaSanPham = (sp) => {
    const danhSachSPGioHang = [...listSanPhamTrongGioHang];
    const sanphamGioHang = {
      id: sp.id,
      name: sp.name,
      image: sp.image,
      soLuong: 1,
      price: sp.price,
    };
    const index = finIndexBySanPhamID(danhSachSPGioHang, sanphamGioHang.id);
    index !== -1
      ? (danhSachSPGioHang[index].soLuong += 1)
      : danhSachSPGioHang.push(sanphamGioHang);
    setListSanPhamTrongGioHang(danhSachSPGioHang);
    // localStorage.setItem('gioHang', JSON.stringify(listSanPhamTrongGioHang));
    // index !== -1
    //   ? (danhSachSPGioHang[index].soLuong += 1)
    //   : setListSanPhamTrongGioHang((preArr) => [
    //       ...preArr,
    //       { ...sanphamGioHang },
    //     ]);
  };

  const handleXoaSP = (id) => {
    const danhSachSPGioHang = [...listSanPhamTrongGioHang];
    const index = finIndexBySanPhamID(danhSachSPGioHang, id);
    if (index === -1) return null;
    danhSachSPGioHang.splice(index, 1);
    setListSanPhamTrongGioHang(danhSachSPGioHang);
  };

  const handleTangGiamSL = (id, bool) => {
    const danhSachSPGioHang = [...listSanPhamTrongGioHang];
    const index = finIndexBySanPhamID(danhSachSPGioHang, id);
    if (index === -1) return null;
    if (bool) danhSachSPGioHang[index].soLuong += 1;
    if (!bool) danhSachSPGioHang[index].soLuong -= 1;
    if (danhSachSPGioHang[index].soLuong < 1)
      danhSachSPGioHang.splice(index, 1);
    setListSanPhamTrongGioHang(danhSachSPGioHang);
  };

  const totalSP = listSanPhamTrongGioHang.reduce((total, spGioHang) => {
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
      <DanhSachSanPham
        handleXemChiTietRoot={handleXemChiTiet}
        handleMuaSanPhamRoot={handleMuaSanPham}
      />

      {hasChiTiet ? (
        <ChitietSanPham chitietSanPham={chitietSanPham} />
      ) : (
        <p className="text-danger text-center m-5">Không có sản phẩm nào!</p>
      )}

      <ModalGioHang
        listSanPhamTrongGioHang={listSanPhamTrongGioHang}
        handleXoaSPRoot={handleXoaSP}
        handleTangGiamSLRoot={handleTangGiamSL}
      />
    </div>
  );
};

export default BaiTapGioHangHook;
