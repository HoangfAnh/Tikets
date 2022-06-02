import React, { useEffect } from "react";
import { BangTrangChu } from "./bang";
import ChanTrang from "./trang1";
import ChanTrang2 from "./chantrang";



import "./index.css";


function TrangChu (){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

      }, []);
     
   return(
        <div className="Home">
            <div className="Home-tk">
                <h2>Thống Kê</h2>
                <div className="Home-tk-1">
                <h2>Doanh thu</h2>
                <div style={{borderRadius: '5px'}}>    
                <input type='date'/>                   
                </div>
                </div>
                <div className="Home-tk-2">
                    <div style={{width:1700, height:100}}><BangTrangChu /></div><br />                    
                </div>
                <div style={{width:'400px' ,height:'30px',paddingTop:'300px' ,position:"absolute"}}>Tổng doanh thu theo tuần</div>
                <div style={{paddingTop:'320px' ,position:"absolute"}}><b style={{fontSize:'35px'}}>191.201.999 </b> đồng </div>
                <div className="Home-tk-3">
                    
                    <div style={{display:'flex'}}>
                        <div style={{marginLeft:310, marginTop:'350px', position:"absolute"}}>
                            <h3><b>Gói gia đình</b></h3>
                        </div>
                        <div style={{marginLeft:720,  marginTop:'350px', position:"absolute"}}>
                            <h3><b>Gói sự kiện</b></h3>
                        </div>
                    </div>
                    <div id='ChanTrang'>
                        <div id='ChanTrang1' style={{}}> 
                        <ChanTrang />
                        </div>
                        <div id='ChanTrang2' > 
                        <ChanTrang2 />
                        </div>
                    </div>
                    
                    <div id='boder2'> 12345</div>
                    <div id='boder1'> 56789</div>
                    <div id='boder3'> 34567</div>
                    <div id='boder4'> 23456</div>
                </div>
            </div>
        </div>
   )
}

export default TrangChu