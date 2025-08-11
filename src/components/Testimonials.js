import Cards from './Cards'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';
const Testimonials=(props)=>{
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function rightShiftHandler(){
        if(index+1==reviews.length){
            setIndex(0);
         }
         else{
            setIndex(index+1);
         }
    }
    function leftShiftHandler(){
         if(index-1<0){
            setIndex(reviews.length-1);
         }
         else{
            setIndex(index-1);
         }
    }
    function surpriseHandler(){
          let randomIndex = Math.floor(Math.random()*reviews.length);
          setIndex(randomIndex);
    }
    return (
        <div className='w-[85vw] md:w-[720px] bg-white flex-col flex justify-center items-center mt-10 p-10 transition-all shadow-lg hover:shadow-xl duration-700'>
            <Cards review = {reviews[index]}></Cards>


            <div className='flex text-3xl mt-5 gap-5 justify-center
             text-violet-400 font-bold'>
                <button onClick={leftShiftHandler}
                 className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHandler}
                 className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight/>
                </button>
            </div>
            <div>
                <button onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 
                transition-all duration-200 
                rounded-md font-bold text-white text-lg
                 cursor-pointer mt-5 px-10 py-2'>Surprise Me</button>
            </div>
        </div>
    )
}
export default Testimonials