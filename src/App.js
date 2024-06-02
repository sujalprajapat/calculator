import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  var [val, setval] = useState(' ');
  var [val1, setval1] = useState(' ');
  var [val2, setval2] = useState(' ');
  // let [val1,setval1]= useState(' ');
  // setval1(val1+val);
  // function get() {
  //   setval1(val);
  //   setval(' ');// alert(val1);
  // }
  function total() {
    //  / setval(parseInt(val)+parseInt(val1));
    try {
      if (val2 == 1) {
        let temp = (parseFloat(val) / parseFloat(val1));
        if (temp == Infinity) {
          throw ("cannot allow zero");
        } else {
          setval(temp);
        }
      }
      if (val2 == 2)
        setval(parseFloat(val) * parseFloat(val1));
      if (val2 == 3)
        setval(parseFloat(val) + parseFloat(val1));
      if (val2 == 4)
        setval(parseFloat(val) - parseFloat(val1));
      if (val2 == 5)
        setval(parseFloat(val) * parseFloat(val1) / 100);
    }
    catch(z){
      setval(z);
    }

}
  return (
    <div className="App">
      <input type='text' value={val} className='out' ></input><br></br><br></br>
      <input type='button' value={"%"} onClick={(e) => { setval2('5'); setval1(val); setval(' ') }} ></input>
      <input type='button' value={"C"} onClick={(e) => { setval(' ') }} ></input>
      <input type='button' value={"CE"} onClick={(e) => setval(val.slice(0, -1))} ></input>
      <input type='button' value={"/"} onClick={(e) => { setval2('1'); setval1(val); setval(' ') }}></input>
      <br></br><br></br>
      <input type='button' value={7} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={8} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={9} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={"*"} onClick={(e) => { setval2('2'); setval1(val); setval(' ') }}></input><br></br><br></br>
      <input type='button' value={4} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={5} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={6} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={"+"} onClick={(e) => { setval2('3'); setval1(val); setval(' ') }}></input><br></br><br></br>
      <input type='button' value={1} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={2} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={3} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={"-"} onClick={(e) => { setval2('4'); setval1(val); setval(' ') }}></input><br></br><br></br>
      <input type='button' value={0} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={"00"} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' value={"."} onClick={(e) => { setval(val + e.target.value) }}></input>
      <input type='button' style={{ backgroundColor: '' }} value={"="} onClick={total}></input>
    </div>
  );
}

export default App;
