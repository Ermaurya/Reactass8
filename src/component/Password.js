import React from 'react'

 const Password = () => {
 const passwords=()=>{
    const A="ABCDEFHIJKLMNOPQRSTUVWXYZ"
    const a="abcdefhijklmnopqrstuvwxyz"
    const special="!@#$%^&*()+?"
    const number="0123456789"
    let finel=`${A}${a}${special}${number}`
    // console.log(finel);
    let store="";
    let length=9;
    for(let i=0;i<length;i++){
        let indx=Math.floor(Math.random()*finel.length-i)
        store = store+finel.charAt(indx)
        console.log(indx);
    }
    console.log(store);
 }
 passwords()
  return (
        <>
        <div className='main_body'>
            <div className='main_border'>
            <div className='contant'>

        <h1>password Generator</h1>
        <div className='password_show'>
        <input type='text' disabled value='hggf'/>
        <span>cop</span>
        </div>
        <br/>
        <div className='select'>
            <h3>Password Length</h3>
        <select>
            <option>Select</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
        </select>
            </div>
        <br/>
        <div className='checkbox'>

        <input type='checkbox'id='AtoZ'/>
        <label htmlFor='AtoZ'>AtoZ UpperCase</label>
        <br/>
        <input type='checkbox' id='atoz'/>
        <label htmlFor='atoz'>atoz LowerCase</label>
        <br/>
        <input type='checkbox' id='Spacial_Char'/>
        <label htmlFor='Spacial_Char'>Spacial Char</label>
        <br/>
        <input type='checkbox' id='number'/>
        <label htmlFor='number'>Numbers</label>
        <br/>
        </div>

        <button className='btn' onClick={passwords}>Generate Password</button>
        </div>
            </div>
            </div>
        </>
  )
}
export default Password;
