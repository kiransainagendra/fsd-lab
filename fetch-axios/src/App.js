import React,{ useState } from 'react';
import axios from 'axios';
function App(){
const [fetchData , setFetchData] = useState(null);
const [axiosData , setAxiosData] = useState(null);
const fetchDataWithFetch = async()=>{
try{
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
setFetchData(data);
}catch(error){
console.error('Error fetching data with Fetch:',error);
}
};
const fetchDatawithAxios = async()=>{
try{
const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
setAxiosData(response.data);
} catch(error){
  console.error('Error fecthing data with Axios:',error);
}
};
return(
  <div style={{backgroundColor:'yellow',padding:'20px',minHeight:'100vh'}}>
    <h1 style={{marginBottom:'20px',textAlign:'center',fontFamily:'Helvetica,sans-serif',color:'darkblue'}}>Fetch-Axios App</h1>
    <section style={{backgroundColor : 'lightyellow',padding:'10px',margin:'10px'}}>
      <h2>Data fetched using Fecth:</h2>
      {fetchData ?(
        <pre>{JSON.stringify(fetchData,null,2)}</pre>
      ):(
        <p>No data fetched with Fecth.</p>
      )}
      <button onClick={fetchDataWithFetch}>Fetch Data with Fetch
    </button>
    </section>
    <section style={{backgroundColor:'palegreen',padding:'10px',margin:'10px'}}>
      <h2>Data fetch using AxiosL</h2>
      {axiosData ? (
        <pre>{JSON.stringify(axiosData,null,2)}</pre>
      ):(
        <p>No data fecthed with Axios.</p>
      )}
      <button onClick={fetchDatawithAxios}>Fetch Data with Axios</button>
    </section>
  </div>
)
};
export default App;
