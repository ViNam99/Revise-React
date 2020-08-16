import {
  XEM_CHI_TIET,
  MUA_SAN_PHAM,
  XOA_SAN_PHAM,
  TANG_GIAM_SL,
  GET_LOCALSTORAGE,
} from "../constant/GioHangConst";

export const xemChiTietSanPhamAction = (sanpham) => {
  return {
    type: XEM_CHI_TIET,
    payload: sanpham,
  };
};

export const muaSanPhamAction = (sanpham) => ({
  type: MUA_SAN_PHAM,
  payload: sanpham,
});

export const xoaSanPhamAction = (id) => ({
  type: XOA_SAN_PHAM,
  payload: id,
});

export const tangGiamSLAction = (id, bool) => ({
  type: TANG_GIAM_SL,
  payload: {
    id,
    bool,
  },
});

export const getLocalStorageAction = gioHang => ({
    type: GET_LOCALSTORAGE,
    payload: gioHang
})