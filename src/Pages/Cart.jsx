import Used from "../Components/Usedbanner"

import CartProduct from "../Components/CartProduct"
import { useSelector } from "react-redux";
export default function Cart(){
    const cart = useSelector((state)=>state.shop)
    
    
    return(
        <div>
         
            <div>
                <Used
                name={"Cart"}
                subName={"Cart"}
                num={cart.length}
                />
            </div>

           <table className="w-full">
                <thead className="bg-slate-400">
                    <tr>
                        <th>Produt</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>


                <tbody className="bg-slate-200 ">
               
                    {cart.map((product, index)=>(
                        <CartProduct
                            product={product}
                            id={index}
                        />
                    ))}

                </tbody>
           </table>

         
         
        </div>
    )
}