
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_key } from "./variable";


function App() {


  const [Search, setSearch] = useState('')

  const handleSearch = (e) => setSearch(e.target.value)

  const handleSubmit = (e) => {
      e.preventDefault();
  };




  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  

  useEffect(() => {
    const fetchdata = async() => {
      try {
        const {data}= await axios.get(`https://pixabay.com/api/?key=${api_key}&q=${Search}&image_type=photo` )
        console.log(data)
        setusers(data.hits)
      } catch (error) {
        console.log(error)
      }
    };
    fetchdata();
    setloading(false)
  }, [Search]);

  return <div className="App">

    
    {
      loading?
      <h1>loading ...</h1>
      :
    <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={Search}
                onChange={handleSearch}/>
            </form>
            <div>
                {
                  users.map(el=> <img style={{borderRadius:"5%"}} height="400px" width="400px" key={el.id} src={el.largeImageURL} alt="" /> )
                }
            </div>
            
            
        </div>
        

    }
  </div>;
}

export default App;
