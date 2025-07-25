import {userInstance} from "../Axios/axiosInstance"

export const contact = (values) => {
    console.log(values,"!!!!!")
    return userInstance.post("/contact", { ...values });
  };

  export const hire=(values)=>{
    console.log(values,"!!!!!------------>>>>>>>")
    return userInstance.post("/submitApplication",{...values});
  }