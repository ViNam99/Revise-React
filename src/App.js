import React from "react";
import { GioHangProvider } from "./common/contexts/GioHangContext";
import BaiTapGioHangContext from "./components/BaiTapGioHangContext";
// import BaiTapGioHangHook from './components/BaiTapGioHangHook'
// import { DemoProvider, DemoContext } from './common/contexts/DemoContext'
// import LearnContext from "./components/DemoContexAPI";
// import BaiTapGioHang from './components/BaiTapGioHang';

const App = () => {
  return (
    <>
      {/* <BaiTapGioHang/>  */}
      {/* <BaiTapGioHangHook/> */}
      {/* 
      <DemoProvider>
         <LearnContext/>
      </DemoProvider> */}

      <GioHangProvider>
        <BaiTapGioHangContext />
      </GioHangProvider>
    </>
  );
};

export default App;
