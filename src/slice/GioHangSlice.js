import { createSlice } from "@reduxjs/toolkit";
import listSPJSON from "../utils/danhSachDienThoai.json";

const findIndexBySanPhamID = (arr, id) => {
  return arr.findIndex((elm) => elm.id === id);
};

const saveLocalstorage = (data) => {
  return localStorage.setItem("gioHang", JSON.stringify(data));
};

const GioHangSlice = createSlice({
  name: "gioHangSlice",
  initialState: {
    danhSachSP: listSPJSON,
    chitietSanPham: {},
    gioHang: [],
  },
  reducers: {
    xemChiTiet: (state, action) => {
      state.chitietSanPham = action.payload;
    },
    muaSanPham: (state, action) => {
      const { id, name, image, price } = action.payload;
      const sanphamGioHang = {
        id,
        name,
        image,
        soLuong: 1,
        price,
      };
      const index = findIndexBySanPhamID(state.gioHang, sanphamGioHang.id);
      index !== -1
        ? (state.gioHang[index].soLuong += 1)
        : state.gioHang.push(sanphamGioHang);
      saveLocalstorage(state.gioHang);
    },
    xoaSanPham: (state, action) => {
      const index = findIndexBySanPhamID(state.gioHang, action.payload);
      if (index === -1) return null;
      state.gioHang.splice(index, 1);
      saveLocalstorage(state.gioHang);
    },
    tangGiamSL: (state, action) => {
      const { id, bool } = action.payload;
      const index = findIndexBySanPhamID(state.gioHang, id);
      if (index === -1) return null;
      if (bool) state.gioHang[index].soLuong += 1;
      if (!bool) state.gioHang[index].soLuong -= 1;
      if (state.gioHang[index].soLuong < 1) state.gioHang.splice(index, 1);
      saveLocalstorage(state.gioHang);
    },
    getLocalStorage: (state, action) => {
      state.gioHang = action.payload;
    },
  },
});

const { actions, reducer } = GioHangSlice;
export const {
  xemChiTiet,
  muaSanPham,
  xoaSanPham,
  tangGiamSL,
  getLocalStorage,
} = actions;
export default reducer;
