import React from "react";
import { useState,useEffect } from "react";
import Datas from"../data/example_data.json";
import Infocard from "./Infocard";
import "../stylecomponent/Pagination.css"


function Pagination(){
    

    const dataAll = Datas;

    const itemPerPage = 9;

    
    const [currentPage,setCurrentPage] = useState(1);
    const [btnLeft,setbtnLeft] = useState(true);
    const [btnRight,setbtnRight] = useState(true);
    

    const lastLengthOnPage = currentPage*itemPerPage;
    const firstIndexOnPage =  lastLengthOnPage - itemPerPage;
    const indexOnPage = dataAll.slice(firstIndexOnPage,lastLengthOnPage);
    
    const npage =[];
    for(let i=1;i<=Math.ceil(dataAll.length/itemPerPage);i++){
        npage.push(i);       
    };
    
    const clickleft=()=>{
        setCurrentPage(Number(currentPage - 1));
    };
    const clickpage=(page)=>{
        setCurrentPage(Number(page));
    };
    const clickright=()=>{
        setCurrentPage(Number(currentPage + 1));
    };
 
    useEffect(()=>{

        if(currentPage===1){
            setbtnLeft(false);
        }else{
            setbtnLeft(true);
        };

        if(currentPage===npage.pop()){
            setbtnRight(false);
        }else{
            setbtnRight(true);
        };
   
    },[currentPage]);

    return(
    <section className="pagination">
        <div className="Grid_container">
            {indexOnPage.map((item)=>{
                return(
                    <Infocard 
                        key={item.id} 
                        itemname={item.name}
                        categories={item.categories}
                        profile_image_url={item.profile_image_url}
                        images={item.images}  
                        operation_time={item.operation_time}
                        address={item.address}
                        rating={item.rating}
                    />);               
            })}
        </div>
        <div className="page_container">
            <button className={btnLeft===false? "disable_left":"btn_left"} disabled={!btnLeft} onClick={clickleft}>{`<`}</button>
            <ul className="All_page">
                {npage.map((page)=>{
                    return(<li className={currentPage===page?  "focus_page":"page"} onClick={()=>{clickpage(page)}} key={page}>{page}</li>);
                })}
            </ul>
            <button className={btnRight===false? "disable_right":"btn_right"}  disabled={!btnRight} onClick={clickright}>{`>`}</button>
        </div>
    </section>
    );
}

export default Pagination ;