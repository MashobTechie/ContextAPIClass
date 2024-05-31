/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import Nav from "../pages/Nav";


const cart = [
  {
    productName: "nike shoe",
  },
];



export const authContext = createContext(); //  return{ provider and consumer}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: "1",
        username: "john_doe",
        email: "john_doe@gmail.com",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
        profilePicture: "https://example.com/profile-picture.jpg",
        course: "Computer Science",
        isAdmin: false,
        signUpDate: "2024-05-31",
      })

      const value = {
        user,
        cart,
      };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;

};
export default AuthProvider;
