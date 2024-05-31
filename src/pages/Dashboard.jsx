/* eslint-disable no-unused-vars */
import Button from "../Button"
import AuthProvider from "../contexts/authContext"
import { useContext } from "react"
import { authContext } from "../contexts/authContext"

const Dashboard = () => {

  // eslint-disable-next-line no-unused-vars
  const {user, cart} = useContext(authContext);

  if(!user){
    return <h1 style={{
      margin: '3rem',
      textAlign: 'center'
    }}>Loading...</h1>
  }

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <p>Hi, {user.username}</p>
    </div>
  )
}

export default Dashboard