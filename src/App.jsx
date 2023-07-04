import { useEffect, useState } from "react"
import { getData } from "./helpers/getData"
import { CommentContainer } from "./components/CommentContainer"
import { PostContainer } from "./components/PostContainer";

function App() {

  const [data, setData] = useState([]);
  
  const {comments, currentUser} = data


  useEffect(()=>{
    getData()
      .then((newData)=>{
        setData(newData)
      })
  },[])
  return(
    <main className="main-container">
      {comments && comments.map((comment)=>(
        <CommentContainer comment={comment} key={comment.id}/>
      ))}
      <PostContainer/>
    </main>
    
  )
}

export default App
