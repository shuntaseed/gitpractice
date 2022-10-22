import { FC } from "react"
import { Data2 } from "./types"



export const List:FC<Data2>=(a)=>{
// export const List=(a:Data2)=>{

    const{state2}=a

return(
<>
<ul>
    <li>
        <p>太刀つてと</p>
        <p>kkkkkkkkk</p>
    </li>
    <li>
        <p>{state2}</p>
    </li>
</ul>



</>




)


}