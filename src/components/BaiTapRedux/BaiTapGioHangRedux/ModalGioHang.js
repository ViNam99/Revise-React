import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  xoaSanPhamAction,
  tangGiamSLAction,
} from "../../../redux/actions/GioHangAct";
const ModalGioHang = ({ ...props }) => {
  const { gioHang, xoaSanPham, tangGiamSL } = props;

  // const dispatch = useDispatch();
  // const { gioHang } = useSelector((state) => state.GioHangReducer);

  const renderGioHang = () => {
    let result = null;
    if (gioHang.length < 0) return result;
    return (result = gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.id}</td>
          <td>{sp.name}</td>
          <td>
            <img src={sp.image} alt="img" width="50px" height="50px" />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => tangGiamSL(sp.id, false)}
              // onClick={() => dispatch(tangGiamSLAction(sp.id, false))}
            >
              -
            </button>
            {sp.soLuong}
            <button
              className="btn btn-primary ml-2"
              onClick={() => tangGiamSL(sp.id, true)}
              // onClick={() => dispatch(tangGiamSLAction(sp.id, true))}
            >
              +
            </button>
          </td>
          <td>{sp.price}</td>
          <td>{sp.price * sp.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaSanPham(sp.id)}
              // onClick={() => dispatch(xoaSanPhamAction(sp.id))}
            >
              X
            </button>
          </td>
        </tr>
      );
    }));
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ Hàng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{renderGioHang()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  gioHang: state.GioHangReducer.gioHang,
});
const mapDispatchToProps = (dispatch) => ({
  xoaSanPham: (id) => dispatch(xoaSanPhamAction(id)),
  tangGiamSL: (id, bool) => dispatch(tangGiamSLAction(id, bool)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHang);
// export default ModalGioHang;
