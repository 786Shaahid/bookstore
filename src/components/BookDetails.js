import React from "react";
import { ImPower } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import {useDispatch,  useSelector } from "react-redux";
import { bookActions, fetchApi } from "../redux/reducers/bookReducer";

function BookDetails() {
  const isClick=useSelector(state=> state.isClick);
  const item=useSelector(state=> state.item);
  const dispatch = useDispatch();
  console.log(item);

  return (
    <>
     {
      isClick && (
         <div className=" max-w-full  h-screen  fixed  z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 bg-gray-500 opacity-50"> </div>
      <div class=" relative  top-20  mx-auto bg-white inset-x-0 w-80  md:w-3/4 min-h-60 gap-4 flex flex-col  md:flex-row p-3 rounded-xl    items-start">
        <button
          onClick={()=>{
            dispatch(bookActions.toggleClick(!isClick));
            dispatch(fetchApi());
          }}
          className="absolute top-0 right-0 m-2 md:m-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>

        {
        Object.keys(item).length ? (<>
         <div className=" mx-auto flex flex-col gap-3 mt-5 md:m-4 ">
          <img
            className=" w-64 h-64 rounded-2xl border border-gray-900 shadow-2xl"
            alt="itemImage"
            src={item.volumeInfo.imageLinks?.thumbnail}
          />
          <div>
            <a href={item.saleInfo?.buyLink} rel="noreferrer" target="_blank">
            <button class="bg-blue-500 w-64 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <span className="flex justify-evenly items-center">
                <ImPower />
                Buy Now
              </span>
            </button>
            </a>
          </div>
        </div>
        <div className="md:m-7 ">
          <h1 className=" text-xl text-centert md:text-start  md:text-lg  font-bold  capitalize md:uppercase mb-2">
            {item.volumeInfo?.title}
          </h1>
          <p className=" text-center md:text-start mb-2 text-gray-500 "> {item.volumeInfo?.subtitle}</p>
          <p className="flex items-center bg-yellow-500 w-14 px-auto text-white pl-3 mb-3">
            {" "}
            <b>{item.volumeInfo.averageRating ?? "2"}</b> <AiFillStar />
          </p>
          <div className="flex">
            <div className="mr-4 "> Description</div>
            <div className=" max-w-fit h-24  overflow-auto border-b  border-yellow-100 shadow-xl  inset-1">
              {item.volumeInfo.description}
            </div>
          </div>
          <h1 className="font-semibold text-3xl mt-5  underline">
            Specifications
          </h1>
          <div className="flex flex-col gap-4  mt-3">
            <div className="flex">
              <div className='mr-8 text-gray-500 text-["16px"]'> Author</div>
              <div className=' max-w-fit   overflow-auto text-["16"] text-opacity-20 '>
                {item.volumeInfo.authors?.join(", ")}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className='mr-8 text-gray-500 text-["16px"]'> Page count</div>
            <div className=' max-w-fit  overflow-auto text-["16"] text-opacity-20 '>
              {item.volumeInfo?.printedPageCount}
            </div>
          </div>
          <div className="flex">
            <div className='mr-8 text-gray-500 text-["16px"]'> Publishing Date</div>
            <div className=' max-w-fit  overflow-auto text-["16"] text-opacity-20 '>
            {item.volumeInfo?.publishedDate}
            </div>
          </div>
          <div className="flex">
            <div className='mr-8 text-gray-500 text-["16px"]'> Publisher</div>
            <div className=' max-w-fit  overflow-auto text-["16"] text-opacity-20 '>
            {item.volumeInfo?.publisher}
            </div>
          </div>
          <div className="flex">
            <div className='mr-8 text-gray-500 text-["16px"]'> Preview Link</div>
            <div className=' max-w-fit  overflow-auto text-["16"] text-opacity-20 '>
           <a href={item.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank" className="text-blue-700 underline" >Preview</a>
            </div>
          </div>
          <div className="flex">
            <div className='mr-8 text-gray-500 text-["16px"]'> More info</div>
            <div className=' max-w-fit  overflow-auto text-["16"] text-opacity-20 '>
           <a href={item.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank" className="text-blue-700 underline" >More Info</a>
            </div>
          </div>
        </div>
        </>):(<div className="text-2xl text-gray-700 w-full h-60 flex justify-center items-center font-bold">Loading....</div>)
      }

       
      </div>

      
    </div>
        )
    }
    
    </>
   
   
  );
}

export default BookDetails;
