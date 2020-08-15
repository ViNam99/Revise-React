import React, { createContext, useState, useEffect } from "react";
import listSPJSON from "../../utils/danhSachDienThoai.json";
const GioHangContextHook = createContext();
const GioHangProviderHook = ({ ...props }) => {
  const [listSanPham] = useState(listSPJSON);
  const [chitietSP, setChitietSP] = useState({});
  const [gioHang, setGioHang] = useState([]);

  useEffect(() => {
    if (gioHang) localStorage.setItem("gioHang", JSON.stringify(gioHang));
  }, [gioHang]);
  const findIndexBySanPhamID = (arr, id) => {
    return arr.findIndex((elm) => elm.id === id);
  };

  const handleXemChitietSanPham = (sp) => {
    setChitietSP(sp);
  };

  const handleGetLocalStorage = (data) => {
    setGioHang(data);
  };

  const handleMuaSanPham = (sp) => {
    const listSPGioHang = [...store.danhSachSanPhamGioHang];
    const sanphamGioHang = {
      id: sp.id,
      name: sp.name,
      image: sp.image,
      soLuong: 1,
      price: sp.price,
    };
    const index = findIndexBySanPhamID(listSPGioHang, sanphamGioHang.id);
    index !== -1
      ? (listSPGioHang[index].soLuong += 1)
      : listSPGioHang.push(sanphamGioHang);
    setGioHang(listSPGioHang);
  };

  const handleXoaSanPham = (id) => {
    const listSPGioHang = [...store.danhSachSanPhamGioHang];
    const index = findIndexBySanPhamID(listSPGioHang, id);
    if (index === -1) return null;
    listSPGioHang.splice(index, 1);
    setGioHang(listSPGioHang);
  };

  const handleTangGiamSL = (id, bool) => {
    const listSPGioHang = [...store.danhSachSanPhamGioHang];
    const index = findIndexBySanPhamID(listSPGioHang, id);
    if (index === -1) return null;
    if (bool) listSPGioHang[index].soLuong += 1;
    if (!bool) listSPGioHang[index].soLuong -= 1;
    if (listSPGioHang[index].soLuong < 1) listSPGioHang.splice(index, 1);
    setGioHang(listSPGioHang);
  };

  const store = {
    danhSachSanPham: listSanPham,
    chitietSanPham: chitietSP,
    xemChitietSanPham: handleXemChitietSanPham,
    danhSachSanPhamGioHang: gioHang,
    muaSanPham: handleMuaSanPham,
    xoaSanPham: handleXoaSanPham,
    tangGiamSL: handleTangGiamSL,
    getLocalStorage: handleGetLocalStorage,
  };

  return (
    <GioHangContextHook.Provider value={{ ...store }}>
      {props.children}
    </GioHangContextHook.Provider>
  );
};

export { GioHangProviderHook, GioHangContextHook };
