import axios from "axios";
import { Navigate } from "react-router-dom";

// private
const url = "http://localhost:5000";
// adding a new student in our database
const addcontact = async (data) => {
    try {
        console.log("add new contact data sending", data);
        const response = await axios.post(`${url}/postmsg`, data);
        console.log("add new contact response receiving", response.status);
        if(response.status==200){
            alert("Message sent successfully");

        }
        return response;
    } catch (error) {
        console.log("Error while contact API", error.message);
    }
};

const Newuser = async (data) => {
    try {
        console.log("add new user data sending", data);
        const response = await axios.post(`${url}/signup`, data);
        console.log("add new user response receiving", response.status);
        if(response.status==200){
            alert("Signup successfull");
            <Navigate to={"/login"}/>
        }
        return response;
    } catch (error) {
        console.log("Error while contact API", error.message);
    }
};

const logindata = async (data) => {
    try {
      console.log("getstudent filtered data sending", data);
      const response = await axios.get(`${url}/signin`, { params: { email: data } });
      console.log("getstudent filtered data receiving", response.data);
      return response.data;
    } catch (error) {
      console.log("Error while getStudentes filtered API", error.message);
    }
  };

// const logindata = async (data) => {
//     try {
//         console.log("get data sending", data);
//         const response = await axios.get(`${url}/signin`, data);
//         console.log("get data response receiving", response);
        
//         return response;
//     } catch (error) {
//         console.log("Error while contact API", error.message);
//     }
// };

export { addcontact ,Newuser,logindata}