import danhSachDTJSON from "../../utils/danhSachDienThoai.json";
import {
  XEM_CHI_TIET,
  MUA_SAN_PHAM,
  XOA_SAN_PHAM,
  TANG_GIAM_SL,
  GET_LOCALSTORAGE,
} from "../constant/GioHangConst";

const initialState = {
  listGioHang: danhSachDTJSON,
  chitietSanPham: {},
  gioHang: [],
};

const findIndexBySanPhamID = (arr, id) => {
  return arr.findIndex((elm) => elm.id === id);
};

const saveLocalStorage = (gioHang) => {
  return localStorage.setItem("gioHang", JSON.stringify(gioHang));
};

const GioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET:
      return { ...state, chitietSanPham: action.payload };

    case MUA_SAN_PHAM:
      const { id, name, image, price } = action.payload;
      const listSanPhamGioHang = [...state.gioHang];
      const sanphamGioHang = {
        id,
        name,
        image,
        soLuong: 1,
        price,
      };
      const index = findIndexBySanPhamID(listSanPhamGioHang, sanphamGioHang.id);
      index !== -1
        ? (listSanPhamGioHang[index].soLuong += 1)
        : listSanPhamGioHang.push(sanphamGioHang);

      saveLocalStorage(listSanPhamGioHang);

      return { ...state, gioHang: listSanPhamGioHang };

    case XOA_SAN_PHAM: {
      const listSanPhamGioHang = [...state.gioHang];
      const index = findIndexBySanPhamID(listSanPhamGioHang, action.payload);
      if (index === -1) return null;
      listSanPhamGioHang.splice(index, 1);

      saveLocalStorage(listSanPhamGioHang);

      return { ...state, gioHang: listSanPhamGioHang };
    }

    case TANG_GIAM_SL: {
      const { id, bool } = action.payload;
      const listSanPhamGioHang = [...state.gioHang];
      const index = findIndexBySanPhamID(listSanPhamGioHang, id);
      if (index === -1) return null;
      if (bool) listSanPhamGioHang[index].soLuong += 1;
      if (!bool) listSanPhamGioHang[index].soLuong -= 1;
      if (listSanPhamGioHang[index].soLuong < 1)
        listSanPhamGioHang.splice(index, 1);

      saveLocalStorage(listSanPhamGioHang);

      return { ...state, gioHang: listSanPhamGioHang };
    }

    case GET_LOCALSTORAGE:
      return { ...state, gioHang: action.payload };
    default:
      return state;
  }
};

export default GioHangReducer;
