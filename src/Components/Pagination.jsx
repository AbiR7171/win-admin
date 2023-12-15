import React from 'react';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {

    let pages = [];

    for( let i =1 ; i <= Math.ceil(totalPosts/postsPerPage); i++ ){
         pages.push(i);
    }

    return (
        <div className='flex'>
            {
                pages.map((page, index)=>{
                     return   <button className={`bg-black text-white rounded px-3 py-2 me-2 shadow-2xl border mt-3  ${page == currentPage && "active" } `} onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
                    
                })
            }
        </div>
    );
};

export default Pagination;