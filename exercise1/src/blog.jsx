const Header = ()=>{
    return <h1>About us</h1>
}

const Post = ()=>{
    return(
        <>
        <h2>why us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolores.</p>
        </>
    )
}

const Footer = ()=>{
  return  <p>copyright all are reserved for us</p>
}

const Blog = ()=>{
    return (
        <>
       < Header/>
       < Post/>
       < Footer/>
        </>
    )
}

export default Blog;
//exercise 2
export const Greeting = ({name})=>{
    return <h1>hello ,{name}</h1> 
}