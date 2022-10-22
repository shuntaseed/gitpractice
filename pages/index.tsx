import axios from "axios"
import { useEffect, useState } from "react"
import {List} from './list'
import {ApiData} from './apidata'
import { Data } from "./types"
import { Data2 } from "./types"


// type Data = {
//   id:number
//   name: string
//   age:number
// }

const TS=()=>{

  const [state,setState]=useState<Data[]>([])
  const [state2,setState2]=useState<string>('アイウエオ')

  useEffect(()=>{
axios.get<Data[]>('api/hello')
.then(e=>{
  console.log(e.data)
  setState(e.data)

})
  },[])

return(
  <>
  <h1>TSの練習</h1>
  <p><p>リモートで追加と競合</p></p>
  <p>test→mainの順 更新しないとエラー</p>
  {state.map(e=>(
    <div>
    {/* <p>{e.id}</p>
    <p>{e.name}</p>
    <p>{e.age}</p> */}
<ApiData 
id={e.id}
name={e.name}
age={e.age}
weight={e.weight}
/>
    </div>
  ))}
  <List state2={state2} />
  </>
)
}


export default TS
