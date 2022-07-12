import { useState } from "react"

const useSearch =()=>{
    const [search,setSearch] = useState([]);
    const key = ["title", "body"];
     const getPost=(data)=> {
        return data.filter((post)=>{
            return key.some((key)=>
                post[key].toUpperCase().includes(search) ||
                post[key].toLocaleLowerCase().includes(search) 
            )
        })
    }
    
    return {getPost,setSearch}
}
export default useSearch