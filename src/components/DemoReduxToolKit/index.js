import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../slice/demo";
const DemoReduxToolKit = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h3>{count}</h3>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>
        Tăng Số
      </button>
    </>
  );
};

export default DemoReduxToolKit;
