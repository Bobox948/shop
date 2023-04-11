import './App.css';


import React, { useState } from 'react';
import logo from './images.jpeg';
import uniqid from 'uniqid';




const Final = () => {

  alert('thanks for shopping')

}


const Products = () => {

  const [total, setCount] = useState(0);
  const [state, setState] = useState(
    {
     cart: [
    
     ]
 
   });
   const [checkout, setCheckout] = useState(false);



   const ProceedToCheckout = () => {

    if (total > 0)
    {setCheckout(true);}
    else
    {
      alert('empty cart')
    }
  };
   



  const Addtocart = e => {

    e.preventDefault()


    let product = e.target.parentElement.children[0].innerHTML


    let quantity = e.target.previousSibling.value

    let price3 = e.target.parentElement.children[2].innerHTML

  
   
    const pattern = /(\d+\.\d+)/;

    const found = price3.match(pattern);

    const price2 = found[0]

const price = parseFloat(price2)



if (quantity>0)
{
  setCount(total+(price*quantity))

   setState({
  ...state, cart: [...state.cart, {id: uniqid(),'name': product, 'quantity': quantity, 'price': price}]
  })

  e.target.previousSibling.value = ""


}
else {

  alert('please chose a positive number')
}


      }


      const delItem = (e) => {


        e.preventDefault()

        const items = state.cart

       let product = e.target.previousSibling.previousSibling.previousSibling

       const productText = product.textContent || product.innerText;

       const index = items.findIndex(item => item.name === productText);

       let quantity3 = e.target.previousSibling
       let quantity2 = quantity3.textContent || quantity3.innerText;
        let quantity = parseInt(quantity2)

        let price  = state.cart[index].price

        let id =  e.target.parentElement.id

    
        setCount(total-(price*quantity))
       
        



       
                  

        const newCart = state.cart.filter((item) => item.id !== id);
        setState({ ...state, cart: newCart });

   
      }
    


  return (
    <div>
      {checkout ? (
        <div className="checkout-section">
          <div className="checkout-total">Total: {total.toFixed(2)}</div>
          <button className="pay-now-btn" onClick={Final}>Pay now</button>
        </div>
      ) : (
    <div className='grid'>
    
    <div className="p1">
    <p>P1</p>
    <img alt=""  src={logo} width="150" height="200"></img>
    <p>Price : 11.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p2">
    <p>P2</p>
    <img  alt="" src={logo} width="150" height="200"></img>
    <p>Price : 22.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p3">
    <p>P3</p>
    <img alt=""  src={logo} width="150" height="200"></img>
    <p>Price : 33.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p4">
    <p>P4</p>
    <img alt=""  src={logo} width="150" height="200"></img>
    <p>Price : 44.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p5">
    <p>P5</p>
    <img alt=""  src={logo} width="150" height="200"></img>
    <p>Price : 55.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p6">
    <p>P6</p>
    <img  alt="" src={logo} width="150" height="200"></img>
    <p>Price : 66.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p7">
    <p>P7</p>
    <img  alt="" src={logo} width="150" height="200"></img>
    <p>Price : 77.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p8">
    <p>P8</p>
    <img alt=""  src={logo} width="150" height="200"></img>
    <p>Price : 88.99$</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p9">
    <p>P9</p>
    <img alt=""  src={logo} width="150" height="200"></img>
    <p>Price : 99.99$</p>

    <input type="number" min="0" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="cart">
    <div test-id="cart"><b>CART</b></div>
    <br></br>
    {state.cart.map(d => <p key={d.id} id={d.id} className="list2">{d.name} - {d.quantity}<button onClick={delItem}>Delete</button></p>)}


    <div id="total">Total : {total.toFixed(2)}</div>
            <br></br>
            <button onClick={ProceedToCheckout}>
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};









export default Products;