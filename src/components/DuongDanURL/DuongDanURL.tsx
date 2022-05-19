import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import DanhSachVe from "../DanhSachVe/DanhSachVe";
import TrangChu from "../TrangChu/TrangChu";

function DuongDanURL(){
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 550);
      }, []);
   return(
    <Routes>
        <Route path="/" element={<TrangChu/>} />
        <Route path="/DanhSachVe" element={<DanhSachVe/>} />
    </Routes>
   )
}

export default DuongDanURL;

