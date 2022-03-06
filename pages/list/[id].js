export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
        paths,
      fallback: false
    }
  }

  export const getStaticProps=async(context)=>{
      const id = context.params.id;
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      return {
          props:{data}
      }

  }
  
  const Details = ({data}) => {
      console.log(data,"single item")
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.website}</p>
      </div>
    );
  }
  
  export default Details;