import './App.css';


import React, { useState } from 'react';
import images from './images.jpeg';
import uniqid from 'uniqid'; // to have unique ids
import cart from './cart.png';




const Final = () => {

  alert('thanks for shopping')

}


const Products = () => {

  const [total, setCount] = useState(0);
  const [state, setState] = useState(
    {
     cart: [] // cart array
 
   });
   const [checkout, setCheckout] = useState(false); // hiding the hidden code (see the return bellow)



  const ProceedToCheckout = () => { 

    if (total > 0)
    {setCheckout(true);} // displaying the hidden code (see the return bellow)
    else
    {
      alert('empty cart')
    }
  };
   



  const Addtocart = e => {

    e.preventDefault()


    let product = e.target.parentElement.children[0].innerHTML // retrieve the title of the product from the page


    let quantity = e.target.previousSibling.value

    let price3 = e.target.parentElement.children[2].innerHTML // retrieve the price of the product from the page

  
   
    const pattern = /\d+(\.\d{1,2})?/; // regex to extrat it 

    const found = price3.match(pattern);

    const price2 = found[0]

const price = parseFloat(price2)



if (quantity>0 && quantity<11)
{
  setCount(total+(price*quantity)) // updating the total of the cart

   setState({
  ...state, cart: [...state.cart, {id: uniqid(),'name': product, 'quantity': quantity, 'price': price}] // using uniqid
  })

  e.target.previousSibling.value = "" // reseting the quantity field 


}
else {

  alert('please choose a quantity (between one and ten)')
}


      }


      const delItem = (e) => {


      e.preventDefault()

      const items = state.cart // items in the array cart

       let product = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling // retrieving the html from the cart with the product name

       const productText = product.textContent || product.innerText; // text content of the child selected above (product variable)

       const index = items.findIndex(item => item.name === productText); // find index of the item in the items cart
       let quantity3 = e.target.previousSibling.previousSibling.previousSibling.previousSibling // retrieving the quantity from the cart

       let quantity2 = quantity3.textContent || quantity3.innerText;
        let quantity = parseInt(quantity2)

        let price  = state.cart[index].price // retrieving the price

        let id =  e.target.parentElement.id // retrieving the id

        setCount(total-(price*quantity)) // updating the cart total after the deletion
       
        



       
                  

        const newCart = state.cart.filter((item) => item.id !== id); // updating the cart array after the deleting
        setState({ ...state, cart: newCart });

   
      }
    


  return (
    <div>
      {checkout ? ( // this code is displaying only after the "proceed to checkout" click
        <div className="checkout-section">
          <h3 className="checkout-total">Total: ${total.toFixed(2)}</h3>
          <button className="pay-now-btn" onClick={Final}>Pay now</button>
        </div>
      ) : ( // the else code when "proceed to checkout" isn't clicked, and if it's clicked it's disabled
    <div className='grid'>
    
    <div className="p1">
    <p>BOX ONE</p>
    <img alt=""  src={images} width="200" height="200"></img>
    <p>Price : $11.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p2">
    <p>BOX TWO</p>
    <img  alt="" src={images} width="200" height="200"></img>
    <p>Price : $22.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p3">
    <p>BOX THREE</p>
    <img alt=""  src={images} width="200" height="200"></img>
    <p>Price : $33.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p4">
    <p>BOX FOUR</p>
    <img alt=""  src={images} width="200" height="200"></img>
    <p>Price : $44.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p5">
    <p>BOX FIVE</p>
    <img alt=""  src={images} width="200" height="200"></img>
    <p>Price : $55.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p6">
    <p>BOX SIX</p>
    <img  alt="" src={images} width="200" height="200"></img>
    <p>Price : $66.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p7">
    <p>BOX SEVEN</p>
    <img  alt="" src={images} width="200" height="200"></img>
    <p>Price : $77.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p8">
    <p>BOX EIGHT</p>
    <img alt=""  src={images} width="200" height="200"></img>
    <p>Price : $88.99</p>

    <input type="number" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <div className="p9">
    <p>BOX NINE</p>
    <img alt=""  src={images} width="200" height="200"></img>
    <p>Price : $99.99</p>

    <input type="number" min="0" placeholder="Quantity"/>
    <input type="submit" value="add to cart" onClick={Addtocart}/>
    </div> 
    <br></br>
    <div className="cart">
    <div test-id="cart"><img alt=""  src={cart} width="20" height="20"></img>
<b>CART</b></div>
    <br></br>
    {state.cart.map(d => <p key={d.id} id={d.id} className="list2">{d.name} * {d.quantity} - ${d.price}  <button onClick={delItem}>Delete</button></p>)}


    <div id="total">Total : ${total.toFixed(2)}</div> {/* fixing to 2 decimals */}
            <br></br>
            <button onClick={ProceedToCheckout}> {/* displays the hidden code with this function */}
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};









export default Products;