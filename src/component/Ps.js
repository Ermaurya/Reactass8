import {useState} from 'react'
// import CopyToClipboard from 'react-copy-to-clipboard'
 const Ps = () => {
const[password,setPassword]=useState('password')
const[pwLength,setPwLength]=useState()
const[upperCase,setUpperCase]=useState(false)
const[lowerCase,setLowerCase]=useState(false)
const[spacialChar,setSpacialChar]=useState(false)
const[number,setNumber]=useState(false)
// const[isCopied,setCopy]=useState(false);
  let upperCaseChar='ABCDEFHIJKLMNOPQRSTUVWXYZ'
  let lowerCaseChar='abcdefhijklmnopqrstuvwxyz'
  let spacialChars='!@#$%^&*()+?'
  let numbers='0123456789'
 const passwords=()=>{
    let charList='';
    if(lowerCase){
        charList +=lowerCaseChar
    }
    if(upperCase){
        charList +=upperCaseChar
    }
    if(spacialChar){
        charList +=spacialChars
        
    }
    if(number){
        charList +=numbers
    }

    setPassword(createPassword(charList))
 }
//  let length=0;
 const createPassword=(charList)=>{
    let myPassword=""
    let passwordLength=charList.length;
    // console.log(passwordLength)
    for(let i=0;i<pwLength;i++){
      let  charIndex=Math.floor(Math.random()*passwordLength)
    //   console.log(charIndex) 
      myPassword +=charList.charAt(charIndex)
    }
    return myPassword;
    // console.log(myPassword)
 }
 const CopyToClipboard=()=>{
    const newText=document.createElement('textarea')
    newText.innerText=password
    document.body.appendChild(newText)
    newText.select()
    document.execCommand('copy')
    newText.remove()
 }
 const copyPassword=(e)=>{
  CopyToClipboard()
 }
//  createPassword()
  return (
        <>
        <div className='main_body'>
            <div className='main_border'>
            <div className='contant'>

        <h1>Password Generator</h1>
        <div className='password_show'>
        <input type='text' disabled value={password}/>
          {/* <button></button></button> */}
        <button className='copy_button' onClick={copyPassword}>✔</button>
        </div>
        <br/>
        <div className='select'>

            <h3>Password Length</h3>
        <select onChange={(e)=>setPwLength(e.target.value)}>
            <option>Select</option>
            <option value='0'>0</option>
            <option value='1' >1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
        </select>
            </div>
        <br/>
        <div className='checkbox'>

        <input type='checkbox'id='AtoZ' checked={upperCase} onChange={(e)=>setUpperCase(e.target.checked)} />
        <label htmlFor='AtoZ'>AtoZ UpperCase</label>
        <br/>
        <input type='checkbox' id='atoz'
        checked={lowerCase} onChange={(e)=>setLowerCase(e.target.checked)}/>
        <label htmlFor='atoz'>atoz LowerCase</label>
        <br/>
        <input type='checkbox' id='Spacial_Char'
        checked={spacialChar} onChange={(e)=>setSpacialChar(e.target.checked)}
        />
        <label htmlFor='Spacial_Char'>Spacial Char</label>
        <br/>
        <input type='checkbox' id='number'
        checked={number} onChange={(e)=>setNumber(e.target.checked)}
        />
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
export default Ps;
