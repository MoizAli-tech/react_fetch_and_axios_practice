import React,{useEffect,useState} from 'react'
import axios from "axios"

const Axios = () => {
    let [get,setGet] = useState([]);
    let [post,setPost] = useState();
    let [put,setPut] = useState();
    let [input1,setInput1] =useState("");
    let [input2,setInput2] =useState("");



    useEffect(()=>{
        async function dataFetcher(){

            // api that fetches list of users
            let resData =  await axios.get("https://reqres.in/api/users");
            setGet(resData.data.data);
        }
        dataFetcher();
       
    },[])

    async function postHandler(e){
        e.preventDefault();
        let result = await axios.post("https://reqres.in/api/users",
        {
                name:"axios",
                job:"axios liberary  "
        })
        setPost(result.data);
    }

   
    async function putHandler(e){
            e.preventDefault();
            let result = await axios.put(`https://reqres.in/api/users/${input1}`,{name:"moiz",job:"reactjs"});
            setPut(result.data);

    }

    async function deleteHandler(e){
        e.preventDefault();
         let result = await axios.delete(`https://reqres.in/api/users/${input2}`);
        console.log(result)
        if(result.status ==204){
            alert("item deleted")
        }

        

}
   
  return (
    <div className="border-4 border-blue-500 ">
        <h1 className='text-xl my-2 text-blue-500'>These are Axios Requests</h1>
        {get.filter((item,index)=>{ return index<2}).map((item,index)=>{
            return(
                <div key={index} className='bg-red-500 my-2 text-white p-4'>
                    <p>This data was fetched using get fetch request</p>
                    <h2>my name is {item.first_name} {item.last_name}</h2>
                    <h3>email is {item.email}</h3>
                </div>
            )
        })}

        <form> 
            <h2>Click button to make a post request </h2>
           
           { post && 
                <div className='bg-red-500 text-white my-2 p-2'>
                    <h2>Name is {post?.name}</h2>
                    <h2>Job is {post?.job}</h2>
                </div>
            }
            

            <button onClick={(e)=>{postHandler(e)}}>Post Request</button>
        </form>


        <form> 
            <h2 className='text-white bg-cyan-500'>Enter id and Click button to make a put request </h2>
           
           { put && 
                <div className='bg-red-500 text-white my-2 p-2'>
                    <h2>Name is {put?.name}</h2>
                    <h2>Job is {put?.job}</h2>
                    <h2>updated at  time  {put?.updatedAt}</h2>

                </div>
            }
            
            <input name="putRequest" className='border-2 border-red-500' placeholder='enter id' value={input1} onChange={(e)=>{setInput1(e.target.value)}}/>
            <button onClick={(e)=>{putHandler(e)}}>Update Request</button>
        </form>

        <form> 
            <h2 className='text-white bg-cyan-500'>Enter id and Click button to make a delete request  </h2>
           
            
            <input name="delRequest" className='border-2 border-red-500' placeholder='enter id' value={input2} onChange={(e)=>{setInput2(e.target.value)}}/>
            <button onClick={(e)=>{deleteHandler(e)}}>delete Request</button>
        </form>
    </div>
  )
}

export default Axios