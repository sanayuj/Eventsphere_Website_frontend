import {userInstance} from "../Axios/axiosInstance"

export const contact = (values) => {
    console.log(values,"!!!!!")
    return userInstance.post("/contact", { ...values });
  };