import { addToCart, removeToCart, emptyCart, filterData } from '../redux/action'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData)
    useEffect(() => {
        dispatch(productList())
        setFilterData(data)
    }, [])
    const [filterData, setFilterData] = useState(data)
    const [sdata, setSData] = useState(4)
    const updateView = (e) => {
        setSData(e.target.value)
    }
    const handleFiletre = (e) => {
        setFilterData(data.filter((elem) => elem.category === e.target.value))

    }
    return (
        <div className="App">
            <select onChange={handleFiletre} className='btn-sho'>Filter <svg className="fsvg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                <option  >Filter</option>
                <option value="utensil">Utensil</option>
                <option value="dress">dress</option>
                <option value="mobile">mobile</option>
                <option value='sport'>Soprt</option>
                <option value='divice'>Electronic Divice</option>
            </select>
            <select onChange={updateView} className='btn-view'>
                <option className='opt' value='4'>View</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            {/* <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div> */}
            <div className='product-container' style={{ 'grid-template-columns': `repeat(${sdata}, 1fr)` }}>
                {
                    filterData.map((iteam, i) => <div key={i} className='product-iteam'>

                        <img className='img' src={iteam.photo} alt='abc' />
                        <div  > Name : {iteam.name}</div>
                        <div> Color : {iteam.color}</div>
                        <div> Category : {iteam.category}</div>
                        <div> Brand : {iteam.brand}</div>
                        <div> Price : {iteam.price}</div>
                        <div>
                            <button className='btn-add' onClick={() => dispatch(addToCart(iteam))}>Add To Cart</button>
                            <button className='btn-rem' onClick={() => dispatch(removeToCart(iteam.id))}>Remove From  Cart</button>
                        </div>
                    </div>)
                }
            </div>
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" class="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
}

export default Main;
