import { FC } from "react"
import { Data } from "./types"

// type Data = {
//     id:number
//     name: string
//     age:number
//   }



export const ApiData:FC<Data>=(y)=>{
// export const ApiData=(y:Data)=>{

    const{id,name,age,weight}=y

111111

    return(
<>
<p>{id}</p>
<p>{name}</p>
<p>{age}</p>
{/* <p>{weight}</p> */}
<p>{weight?.join('/')}</p>
</>


    )
}
