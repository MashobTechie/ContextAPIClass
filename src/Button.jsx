/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import { authContext } from "./contexts/authContext"

const Button = ({username}) => {

  const {user} = useContext(authContext)

  return (
    <div>
        <button>Hi, {user.username}</button>
    </div>
  )
}

export default Button