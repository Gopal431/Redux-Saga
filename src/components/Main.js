import { addToCart, removeToCart, emptyCart } from '../redux/action'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData)
    console.log("data from main components", data)

useEffect(()=>{
    dispatch(productList())
},[])
    return (
        <div className="App">
        
            <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
       
       
            <div className='product-container'>
                {
                    data.map((iteam) => <div className='product-iteam'>
                        <img className='img' src={iteam.photo} alt='abc' />
                        <div > Name : {iteam.name}</div>
                        <div> Name : {iteam.color}</div>
                        <div> Name : {iteam.category}</div>
                        <div> Name : {iteam.brand}</div>
                        <div> Name : {iteam.price}</div>
                        <div>
                            <button className='btn-add'  onClick={() => dispatch(addToCart(iteam))}>Add To Cart</button>
                            <button className='btn-rem' onClick={() => dispatch(removeToCart(iteam.id))}>Remove From  Cart</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
}

export default Main;
