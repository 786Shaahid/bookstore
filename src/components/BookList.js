import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from '../redux/reducers/bookReducer';

//  DEFINE THE FILTER FUNCTION
const FilterBook = (input) => {
  if (!input) {
    return () => true;
  }
  const lowerInput = input.toLowerCase();
  return (bookData) => {
    console.log(typeof (bookData.volumeInfo.categories));
    const matchesCategories = bookData.volumeInfo.categories?.some(category => category.toLowerCase().includes(lowerInput));
    const matchesAuthor = bookData.volumeInfo.authors?.some(author => author.toLowerCase().includes(lowerInput));
    return matchesCategories || matchesAuthor;
  };
};


function BookList() {
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
          bookList.map((item, index) => (
            <>
              <div key={index} className='   bg-slate-800   border border-gray-500 shadow-xl  rounded-lg p-3 break-words  md:transition-opacity duration-500 delay-200 hover:bg-slate-900' title='Click For More Details'>
                <div className='w-full flex '>
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
                <div className='w-full md:w-96 h-20  overflow-auto  text-slate-300 capitalize mt-3  font-medium   p-2 '>
                  {item.volumeInfo.description}
                </div>
                <div className='w-full mt-3 p-2 text-slate-300'>
                  <div className=''>Author :{item.volumeInfo.authors.join(", ")}</div>
                  <div className=''> Price: &#8377;{item.saleInfo["listPrice"]?.amount}</div>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default BookList;