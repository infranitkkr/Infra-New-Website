import React , {useState , useEffect} from 'react'
import axios from 'axios'


const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    console.log("I am called")
    useEffect(()=>{
        console.log("UseEffect is being called!")
        const fetchData = async () => {
            console.log("before setLoading")
            await setLoading(true)
            console.log("after setLoading")
            try{
                const res = await axios.get(url)
                console.log("before setData")
                await setData(res.data)
                console.log("after setData")
            }
            catch(err){
                console.log(err)
                setError(err)
            }
            console.log("before setLoading")
            setLoading(false)
            console.log("after setLoading")
        }
        fetchData()
    },[url])

    const reFetchData = async () => {
        setLoading(true)
        try{
            const res = await axios.get(url)
            setData(res)
        }
        catch(err){
            console.log(err)
            setError(err)
        }
        setLoading(false)
    }

    return {data,error,loading,reFetchData}
}

const Test = () => {
    const {data,error,loading} = useFetch('http://www.google.com');
    console.log(data,error,loading);
  return (
    <div>
      <h1>Shivam</h1>
    </div>
  )
}



export default Test
