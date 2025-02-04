import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      
      console.log(result[0]);
      
      setData(result); // Update state with API data
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className=" justify-center bg-blue-200">
      <h1 className="text-2xl font-bold ml-[45%] text-3xl">Products</h1>
    <div className='flex flex-wrap gap-10 mt-20 justify-center '>
    {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((val) => (
          <div className='w-[20%] p-5 rounded-xl bg-white shadow-lg'>
          <img className='h-[200px] 'src={val.image}/>
          <h1 key={val.id} className="text-lg">{val.title}</h1>
          <p className='mt-5'>{val.category}</p>
          <p className='mt-5'>{val.description}</p>
          <p className='mt-5 font-bold'>{val.price}</p>
          </div>
          
        ))
      )}
    </div>  
    </div>
  );
};

export default App;
