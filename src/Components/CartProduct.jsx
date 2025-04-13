import { IoMdClose } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";
import { RemoveProduct } from "./Remove";
import { useDispatch } from "react-redux";
import { IncreaseProduct } from "./Increment";
import { useSelector } from "react-redux";
import { DecreaseProduct } from "./Decrement";
import { useMemo } from "react";

export default function CartProduct({product}){
   const dispatch = useDispatch()
   const quantity = useSelector((state)=>state.shop.find((item)=>item.id === product.id)?.qty || 1)
   const stateUpdate = useSelector((state)=>state.shop)

    const increase = (product)=>{
        dispatch(IncreaseProduct(product))

    }

    const decrease = (product)=>{
      dispatch(DecreaseProduct(product))
    }

    const removeItem = (product)=>{
        dispatch(RemoveProduct(product))
    }

    const total = useMemo(()=>{
        const totalPrice = product.price * quantity
        return totalPrice
    }, stateUpdate)

    return(

            <tr className=" border-[0.1rem] border-black ">   
            <td className=" flex items-center gap-x-[4rem] w-fit">
                <p><IoMdClose onClick={()=>removeItem(product)}/></p>
                 <img src={product.image} className="w-[7rem] h-auto"/>
                 <p>{product.title}</p>
            </td>
            <td className="border-[0.1rem] border-black w-fit text-center font-bold"><p>${product.price}</p></td>
             
            <td className="border-[0.1rem] border-black w-fit">
                <div className="flex flex-row items-center justify-center gap-x-4">
                <p className="bg-black text-white cursor-pointer text-[1rem] p-2" onClick={()=>decrease(product)}><IoMdRemove /></p>
                <p className="bg-orange-600 text-[1rem] px-4 py-1 font-bold">{quantity}</p>
                <p className="bg-black cursor-pointer text-white text-[1rem] p-2" onClick={()=>increase(product)}><IoAdd /></p>
                </div>
            </td>

            <td className="border-[0.1rem] border-black w-fit text-center text-red-600 font-bold">
                ${total}
            </td>

        </tr>

    )

}