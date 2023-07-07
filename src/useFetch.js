import {useState,useEffect} from "react";

const useFetch = (url) => {
const [data,setData] = useState(null)
const [isLoading,setLoading] = useState(true)
const [error,SetError] = useState(null)  

useEffect(() => 
{fetch(url)
.then(res => {
    if(!res.ok){
        throw Error("Coudlnt fetch")
    }
    return res.json();
})
.then(data =>{
setData(data);
setLoading(false);
})
.catch(err => {
    SetError(err.message)
    setLoading(false)
})
console.log("use effect run ");
},[url]);

return {data, isLoading,error} }

export default useFetch