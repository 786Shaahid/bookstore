import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { bookActions, fetchApi, fetchItem } from '../redux/reducers/bookReducer';

//  DEFINE THE FILTER FUNCTION
const FilterBook = (input) => {
  if (!input) {
    return () => true;
  }
  const lowerInput = input.toLowerCase();
  return (bookData) => {
    const matchesCategories = bookData.volumeInfo.categories?.some(category => category.toLowerCase().includes(lowerInput));
    const matchesAuthor = bookData.volumeInfo.authors?.some(author => author.toLowerCase().includes(lowerInput));
    return matchesCategories || matchesAuthor;
  };
};


function BookList() {

  const isClick=useSelector(state=> state.isClick)
  
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const filterInput = useSelector(state => state.filterInput)
  const bookList = items.filter(FilterBook(filterInput));


  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch])


  return (
    <>
      <div className=' w-full h-screen  overflow-auto bg-slate-750 flex pt-6  flex-wrap gap-6 justify-around items-center  p-1 ' >
       
        {
       bookList.length?   bookList.map((item, index) => (
            <>
              <div key={index} className='   bg-slate-800   border border-gray-500 shadow-xl  rounded-lg p-3 break-words  md:transition-opacity duration-500 delay-200 hover:bg-slate-900' title='Click For More Details'
               onClick={(e)=>{
                  e.preventDefault();
                  dispatch(fetchItem(item.selfLink))
                  dispatch(bookActions.toggleClick(!isClick));

               }}
               >
                <div className='w-full   flex '>
                  <img src={item.volumeInfo.imageLinks?.smallThumbnail} alt='itemImage'
                    className='w-24  h-24 rounded-2xl'
                  />
                  <div className='w-60  min-h-30' >

                    <p className='  w-60  min-h-30  break-words uppercase font-medium md:font-bold text-white ml-4  px-1 overflow-hidden'>
                      {item.volumeInfo.title}
                    </p>
                    <p className=' ml-4  px-1 overflow-hidden opacity-35 mt-1 w-60  min-h-30  text-white break-words'>{item.volumeInfo.subtitle}</p>
                  </div>
                </div>
                <div className='w-full md:w-96 h-20  overflow-auto  text-slate-300 capitalize  font-medium   p-2 '>
                  {item.volumeInfo.description} 
                </div>
                <div className='w-full overflow-auto mt-1 md:text-sm p-2 text-slate-300 md:w-96 h-20 break-words'>
                  <div className=''>Author : <span className=" text-gray-400">{item.volumeInfo.authors.join(", ")}</span></div>
                  <div className=''>Price:     <span className=" text-gray-400">&#8377; -  {item.saleInfo["listPrice"]?.amount ?? "Not For Sale"  }</span></div>
                  <div className=''>Categories:<span className=" text-gray-400">  {item.volumeInfo.categories?.join(", ")}           </span></div>
                </div>
              </div>
            </>
          )):(<h1 className='text-xl font-bold text-white'>No Results</h1>)
        }
      </div>
    </>
  )
}

export default BookList;