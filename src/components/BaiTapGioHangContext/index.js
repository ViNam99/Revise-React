import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ChitietSanPham from "./ChitietSanPham";
import ModalGioHang from "./ModalGioHang";
import { GioHangContext } from "../../common/contexts/GioHangContext";

class index extends Component {
  render() {
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
          Giỏ Hàng (0)
        </p>
        <DanhSachSanPham />

        <GioHangContext.Consumer>
          {(context) => {
            return (
              <>
                {Object.keys(context.chitietSanPham).length > 0 ? (
                  <ChitietSanPham />
                ) : (
                  <p className="text-danger text-center m-5">
                    Không có sản phẩm nào!
                  </p>
                )}
              </>
            );
          }}
        </GioHangContext.Consumer>

        <ModalGioHang />
      </div>
    );
  }
}

export default index;
