import React, {useState, useEffect, useRef} from 'react';
// import data from '../utils/data';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import {Link} from 'react-router-dom';

function Cart({list}) {
    const [counts, setCounts] = useState([]);
    const [random, setRandom] = useState(0);
    const decrease = useRef(null);

    useEffect(()=>{
        if(counts.length==0){
            list.forEach(x=>{
                let obj = {
                    name: x.name,
                    count: 1
                }
                counts.push(obj)
                setCounts(counts)
            })
        }
        // console.log(counts)
    }, [])


    const increment = (name)=>{
        counts.forEach(x=>{
            if(x.name === name){
                x.count+=1
                setCounts(counts)
            }
            
        })
        setRandom(random+1) //to make a render happen
        console.log('counts incremented: ',counts)
    }
    const decrement = (name)=>{
        console.log(decrease.current.value)
        counts.forEach(x=>{
            if(x.name === name){
                if(x.count===1) return;
                x.count-=1
                setCounts(counts)
            }
            
        })
        setRandom(random+1) //to make a render happen
        console.log('counts incremented: ',counts)
    }

    const handleRemove = (obj, index) => {
        let a = list.splice(index, 1);
        setRandom(random+1)
    }

    const clearAll = ()=>{
        list.splice(0, list.length)
        console.log('emtpy list: ',list)
        setRandom(Math.ceil(Math.random()*10))
    }
    
    return (
        <div className="cart">
            <Link to="/">
                Back to Home
            </Link>
            <div>
            <header></header>
            
            {
                list.map((single, index)=>{
                    return (                     
                        <div className="cart-item" key={single.id}>
                            <img src={single.images[0]} alt="" className=""/>
                            <div>
                                <h4>{single.name}</h4>
                                <h4 className="item-price">${single.price}</h4>
                                <button className="remove-btn" onClick={()=>handleRemove(single, index)}>Remove</button>
                            </div>
                            <div>
                                <button className="amount-btn" onClick={()=>increment(single.name)}>
                                    <IoIosArrowUp/>
                                </button>

                                <p className="amount">{counts[index]?.count || 1}</p>

                                <button className="amount-btn" ref={decrease} value='1' onClick={()=>decrement(single.name)}>
                                    <IoIosArrowDown/>
                                </button>
                                
                            </div>
                            
                        </div>
                    )
                })
            }
            <footer>
                {list.length!==0 && <hr />}
                <div className="footer">
                    {list.length!==0 && <button className="clear-all-btn" onClick={clearAll}>Clear All</button>}
                </div>
                
            </footer>
            </div>
        </div>
    )
}

export default Cart
