import React, { useContext, useState } from 'react'
import ModeContext from './utils/ModeContext'
import { product } from '../Utils/Constants';
import { useNavigate } from 'react-router-dom';

const CartPage=()=>{

    const [id]=useContext(ModeContext)

    const navigate = useNavigate();
    
    // Created to for ADD and Remove
    const [show,setShow]=useState(false)
    const [btnText,setBtnText]=useState("ADD")

    //Created for Quantity number update.
    const [num,setNum]=useState(0)

    const [value,setValue]=useState(0)

    //To change shipping feeddddddd
    const [ship,setShip]=useState("")

    //Function to change value
    let value1=()=>{setValue(product[id].price*2)}
    let value2=()=>{setValue(product[id].price*3)}
    let value3=()=>{setValue(product[id].price)}


  return (
    
    <div className='box0'>
        <div className='box00'>
        <button onClick={() => navigate('/')} type="button" class="btn btn-outline-dark">Home</button>
        </div>
        <div className='box1'>
                <img className='box2' src={product[id].images[0]} alt=''/>
                <span className='box9'>
                    <h3 className='box10'>{product[id].title}</h3>
                    <h4 >{product[id].description}</h4>
                    <h5>Brand : {product[id].brand}</h5>
                    <h5>Rating : {product[id].rating}</h5>
                    <h5>Discount : {product[id].discountPercentage}%</h5>
                    <h5>Stock Left : {product[id].stock}</h5>         
                </span>
            
            <div className='box11'>
            {show &&
            <span class="dropdown" className='box13'>
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       {num}
                    </button>
                    <ul class="dropdown-menu">

                    <li><button class="dropdown-item" type="button" onClick={()=>{
                            setNum(1)
                            value3()
                            setShip(20)
                        }} 
                        >1</button></li>

                        <li><button class="dropdown-item" type="button" onClick={()=>{
                            setNum(2)
                            value1()
                            setShip('FREE')
                        }} 
                        >2</button></li>
                        <li><button class="dropdown-item" type="button"onClick={()=>{
                            setNum(3)
                            value2()
                            setShip('FREE')
                        }}
                        >3</button></li>
                    </ul>
            </span>
            }
            ${product[id].price}
             <div className='box12'><button className='box14' onClick={()=>{
                                setShow(!show)
                                btnText==="ADD"? setBtnText("REMOVE"):setBtnText("ADD")
                                btnText==="REMOVE"? setNum(0):setNum(0)
                                btnText==="REMOVE"? setValue(0):setValue(0)
                                btnText==="REMOVE"? setShip(0):setShip(0)

                                }}>{btnText}</button>
                                </div>
            </div>
        </div>
        <br/>
        <hr></hr>
        <div className='box8'>
            <div className='box3'>SUBTOTAL:<span>$ {value}</span></div>
            <div className='box4'>SHIPPING:<span>$ {ship}</span></div>
        </div>
        <hr></hr>
        <div className='box15'>
        <div className='box5'>TOTAL:<span>$ {value + (typeof ship === 'number' ? ship : 0)}</span></div>
        <div className='box6'>Get Daily Cash With Nespola Card</div>
        </div>
    </div>
  )
}

export default CartPage