import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement, mutiplyby } from "../services/Counter_Slice";
import {RootState} from "../services/rootReducer";

import logo from '../Image/image_2020_11_26T09_57_50_989Z-removebg-preview.png';

import { MdAddCircle } from "react-icons/md";
// import { GrSubtractCircle } from "react-icons/gi";
// import { GrSubtractCircle } from "react-icons/go";
import { HiMinusCircle, HiSparkles, HiArrowCircleRight } from "react-icons/hi";
function Counter() {

    
    const dispatch = useDispatch();

    const { counterNumber} = useSelector((state: RootState) => state.Counter);


    // var addno = prompt('Please Enter Number For Addition');
    // console.log(addno);

    
    const AdditionFunc = () =>{

        dispatch(increment(2));
    }


    return (
        <div className="App">
       


            <img src={logo} className="App-logo" alt="logo" style={{ height: "150px", textAlign: 'left' }} />
            {/* {state.name}-{state.purchase}-{state.sell} */}
            <p>  Result Area <HiArrowCircleRight className="resIcn" /> : <span id="value"> {counterNumber}</span> times</p>

            <div className="bottnMain">
                <button className="btns" onClick={AdditionFunc} > <MdAddCircle />ADD By 2</button>
                <button className="btns" onClick={() => dispatch(decrement(1))}> <HiMinusCircle /> SUBTRACT By 1</button>
                <button className="btns" onClick={() => dispatch(mutiplyby(10)) } > <HiSparkles /> Multiply By Two</button>
            </div>
            {/* <button id="incrementAsync" className="btns">Increment async</button> */}

        </div>
    );
}

export default Counter;
