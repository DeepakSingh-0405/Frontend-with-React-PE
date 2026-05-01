import { useParams } from "react-router-dom"

function Contact() {
  const { id } = useParams()
  return (
    <>
    <h1>This is contact page</h1>
    <h2>Contact id: {id}</h2>
    </>
  )
}

export default Contact