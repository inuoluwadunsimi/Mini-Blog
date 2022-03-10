
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
   const {data, loading , error} = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="Home">
           {error && <div>{error}</div>}
           {loading  && <div>loading...</div>}
          {data && <Bloglist blogs={data} title="All blogs"/>}
      
        </div>
     );
}
 
export default Home;