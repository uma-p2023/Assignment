import React,{useState,useEffect} from 'react';


function DataFetchingComponent() {
    const [data,setData] = useState([]);
      
    useEffect(() => {
      const fetchData = async() =>{
        try{
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const result = await response.json();

          setData(result);
        }catch (error) {
          console.log("error fetching the data:",error);
        }
      }
    fetchData();
    });
    return<>
    <div>
        {data.map((item)=>(
            <p key={item.id}>{item.email}</p>
        ))}
    </div>
    
    </>
  }
  

  export default DataFetchingComponent;