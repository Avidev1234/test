import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import {  useForm } from "react-hook-form";
import "./app.css";
// import {Link} from 'react-router-dom'
import axios from "axios"
import "./app.css"
// import { Formik } from "formik";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import "yup-phone";


const schema=yup.object({
  username:yup.string().required("This field  is required"),
  sex:yup.string().required("This field  is required"),
  Date:yup.string().required("This field  is required"),
  Mobile:yup.string().required().min(12).label('Number should start with +91'),
  // id1:yup.string().required().min(12).label('Pan card should be 12 digits'),
  contact:yup.string().required().min(10).label('Phone number should be 10 digits')
  
})

function Form() {
  // const [name, setName] = useState("")
  // const [Age, setAge] = useState("")
  // // const [sex, setsex] = useState("")
  // const [Mobile, setMobile] = useState("")
  // const [Address, setAddress] = useState("")
  // const [Govt, setGovt] = useState("")
  // const [Guardian, setGuardian] = useState("")
  // const [Nationality, setNationality] = useState("")
  // const [regitser, setRegitser] = useState("")
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [govt, setGovt] = useState("");
  const [gaurd, setGaurd] = useState("");
  const [Nati, setNati] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

//   const [formData, setFormData] = useState({
//     username:'',
//     Age:'',
//     Mobile:'',
//     Address:'',
//     Govt:'',
//     Guardian:'',
//     Nationality:''
//  })
  // const login =(e)=>{
  //   e.preventDefault();
  //   axios.post("http://localhost:3001/register",{
  //     username:name,
  //     Age:Age,
  //     // Sex1:sex,
  //     Mobile:Mobile,
  //     Address:Address,
  //     Govt:Govt,
  //     Guardian:Guardian,
  //     // Nationality:Nationality
  //   }).then((response)=>{
  //     if (response.data.message) {
  //       setRegitser(response.data.message);
  //     // console.log(response);
  //   }
  //     else {
  //       setRegitser("You have registered")
  //     }

  // })

  // }

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", {
      Age: age,
      username: username,
      Mobile: mobile,
      Address: address,
      Govt: govt,
      Gaurd: gaurd,
      Nati: Nati,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("YOU HAVE REGISTERED IN THE FORM!!");
      }
    });
  };

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(schema)

  });

  // const [values, setValues] = useState({
  //   Name:'',
  //   age:'',
  //   sex:'',
  //   Mobile:'',
  //   Address:'',
  //   Govt:'',
  //   Guardian:'',
  //   Nationality:''

  // })

  // const handleChange =(event)=>{
  //   setFormData({...formData,[event.target.name]:[event.target.value]})
  // }

 
  // const onsubmit=data =>console.log(data);

  const [showtext, setShowtext] = useState("");

  const handletext=(e)=>{
    const getValue=e.target.value;
    if(getValue==="Adhar")
    {
      const show="Adhar card number should be of 10 digits";
      setShowtext(show);
    }else if(getValue==="pan"){
      const show ="Pan card should have 12 digits";
      setShowtext(show)
    }else if(getValue==="select"){
      const show="";
      setShowtext(show)
    }

  }
  
  return (
    
    
    <div className="container" >
    
   {/*<Formik> */} 
        <form action="" className="flex flex-col"
       onSubmit={handleSubmit(onsubmit)}
       
       >
       
       
        <div className="row">
          <div className="col-sm-12">
            <h5 className="mt-3 mb-4 fw-bold">Personal Detail</h5>
            <div className="row mb-3">
            <label htmlFor=""  {...register("username",{
              required:true,
            })}> user name*</label>
              <div className="form-group col-md-4">
                <input
                // onChange={handleChange}
                onChange={(e) => {
                                setUsername(e.target.value);
                              }}

                id="text"
                  type="text"
                  name="userName"
                  className="form-control"
                 
                  // value={formik.values.text}
                  //  onChange={formik.handleChange}
                  
                  placeholder="Enter First Name"
                />
                {errors.username &&( 
                  <span className="field_level_error">{errors.username.message}</span>)}
              </div>

              <label htmlFor="Date" className="form-group col-md-2"   {...register("Date",{
                required:true,
              })}>  Date of Birth or <br />
              Age</label>
             
              <div className="form-group col-md-3">
                <input
                onChange={(e)=>{setAge(e.target.value)}}

                id="age"
                type="number"
                // value={formik.values.age} 
                // onBlur={formik.handleBlur}
                  placeholder=" Age in years"
                  className="form-control"
                
                />
                {errors.Date &&( 
                  <span className="field_level_error">{errors.Date.message}</span>)}
              </div>
              sex{" "}
              <div className="form-group col-md-2 ">
              <label className="form-label" {...register("sex",{
                required:true,
              })}></label>
              
                <select name="" id="" className="form-group col-md-8" >
                  <option 
                  >
                  Select
                  </option>
                  <option>
                  Male
                  </option>
                  <option>Female</option>
                </select>
                {errors.sex &&( 
                  <span className="field_level_error">{errors.sex.message}</span>)}

              </div>
             
              <div className="row mb-3 p-4">
             
                <label htmlFor="Mobile" {...register("Mobile")}>   Mobile </label>
                <div className="form-group col-md-4">
                  <input
                // onChange={handleChange}
                onChange={(e)=>{setMobile(e.target.value)}}


                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter Mobile"
                    
                  />
                  {errors.Mobile &&( 
                    <span className="field_level_error">{errors.Mobile.message}</span>)}
                </div>
                
                <label htmlFor="id"  className="form col-md-1" {...register("id")}>Govt issued id</label>
                
                <div className="form col-md-2">
                  <select name="" id="" className="form col-md-8" onChange={(e)=>handletext(e)}>
                    <option value="select">select Id</option>
                    
                    <option value="Adhar">Adhar card</option>
                   
                    <option value="pan">Pan card</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                
                  <input
                // onChange={handleChange}
                onChange={(e)=>{setGovt(e.target.value)}}

                    type="text"
                    name="lastName"
                    className="form col-mb-3"
                    placeholder="Enter Government id"
                    
                    // {...register("id1")}
                  />
                  {errors.id &&( 
                    <span className="field_level_error">{errors.id.message}</span>)}
                  <label className="form-label">{showtext}</label>
                  
                </div>
              </div>
              <h5>Contact Details</h5>
              <div className="row mb-5">
              <label htmlFor="Guardian"  {...register("Guardian")}> Guardian Details</label>
                
                <div className="form-group col-md-2">
                  <select name="" id="" className="form-group col-md-8">
                    <option value="id type">Guardian</option>
                    <option value="id type">parents</option>
                    <option value="">Auncle or aunt</option>
                  </select>
                </div>
                <div className="form-group col-md-2 p-(-7)">
                  <input
                // onChange={handleChange}
                onChange={(e) => {
                                setGaurd(e.target.value)
                              }}

                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter guardian Name"
                   
                  />
                </div>
                Email
                <div className="form-group col-md-3">
                  <input id="email" type="email" 
                  // value={formik.values.email} 
                  // onChange={formik.handleChange}
                   placeholder="Enter Email " 
                  className={errors.email?"input-error":""} />
                </div>
                Emergency contact <br />
                Number
                <div className="form-group col-md-2 ">
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    {...register("contact")}
                    placeholder="Enter phone number"
                    // onChange={onChangeHandler}//new
                  />
                  {errors.contact &&( 
                    <span className="field_level_error">{errors.contact.message}</span>)}
                </div>
              </div>
              <h5>Address Details</h5>
              <div className="row mb-3">
              <label htmlFor="" {...register("Address")}>Address</label>
                
                <div className="form-group col-md-4 ">
                  <input
                  // onchange={handleChange}
                onChange={(e)=>{setAddress(e.target.value)}}

                    type="text"
                    name="Enter Address"
                    className="form-control"
                    placeholder="Enter Address"
                    
                  />
                </div>
                State
                <div className="form-group col-md-3">
                  <select name="" id="" className="form-group col-md-8">
                    <option value="id type">choose State</option>
                    <option value="id type">Andhra Pradesh</option>
                    <option value="">Sikkim</option>
                    <option value="id type">Jharkhand</option>
                    <option value="">Amaravati</option>
                    <option value="id type">Itanagar</option>
                    <option value="">Assam</option>
                    <option value="id type">Dispur</option>
                    <option value="id type">Patna</option>
                    <option value="">Goa</option>
                    <option value=""> Gujarat</option>
                    <option value="">Shimla</option>
                  </select>
                </div>
                City
                <div className="form-group col-md-2 ">
                  <select name="" id="" className="form-group col-md-8">
                    <option value="id type">choose city</option>
                    <option value="id type">Mumbai</option>
                    <option value="">Delhi</option>
                    <option value="id type">Bangalore</option>
                    <option value="">Hyderabad</option>
                    <option value="id type">Chennai</option>
                    <option value="">Kolkata</option>
                    <option value="id type">Pune</option>
                    <option value="">Lucknow</option>
                    <option value="id type">Kanpur</option>
                    <option value="">Bhopal</option>
                    <option value="">Patna</option>
                    <option value="">Ludhiana</option>
                    <option value="">Dhanbad</option>
                    <option value="">Srinagar</option>
                    <option value="">Nashik</option>
                    <option value="">Ranchi</option>
                    <option value="">Jodhpur</option>
                    <option value="">Chandigarh</option>
                    <option value="">Bhubaneswar</option>
                    <option value="">Jamshedpur</option>
                  </select>
                </div>
                <div className="row mb-3 p-4">
                  Country
                  <div className="form-group col-md-4">
                    <select name="" id="" className="form-group col-md-8">
                      <option value="id type"> Afghanistan</option>
                      <option value=""> Albania</option>
                      <option value="id type">India</option>
                      <option value="">US</option>
                      <option value="id type">Germany</option>
                      <option value="">UK</option>
                      <option value="id type">Brazil</option>
                      <option value="">Australia</option>
                      <option value="id type">Argentina</option>
                      <option value="">China</option>
                    </select>
                  </div>
                  Pincode
                  <div className="form-group col-md-4 ">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Enter Pincode"
                      {...register("pincode")}
                    />
                  </div>
                </div>
                <h5>Other Details</h5>
                <div className="row mb-3">
                  Occupation
                  <div className="form-group col-md-2 ">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Enter First Name"
                      {...register("occupation")}
                    />
                  </div>
                  Religion
                  <div className="form-group col-md-2">
                    <select name="" id="" className="form-group col-md-8">
                      <option value="id type">Select religion</option>
                      <option value="id type">Hindu</option>
                      <option value="">Muslim</option>
                      <option value="id type">sikh</option>
                      <option value="">Christian</option>
                      <option value="id type">OBC</option>
                    </select>
                  </div>
                  Material Status
                  <div className="form-group col-md-2 ">
                    <select name="" id="" className="form-group col-md-8">
                      <option value="id type">Married</option>
                      <option value="">Unmarried</option>
                      <option value="id type">Widow</option>
                    </select>
                  </div>
                  Blood Group
                  <div className="form-group col-md-2">
                    <select name="" id="" className="form-group col-md-8">
                      <option value="id type">A+</option>
                      <option value="">B+</option>
                      <option value="id type">A-</option>
                      <option value="">B-</option>
                      <option value="id type">O+</option>
                      <option value="">O-</option>
                      <option value="id type">AB+</option>
                      <option value="">AB-</option>
                    </select>
                    
                    </div>
                   <label htmlFor="nationality" {...register("nationality")}> Nationality</label>
                    
                  <div className="form-group col-md-3">
                  <input
                  onChange={(e) => {
                                  setNati(e.target.value);
                                }}
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Enter Nationality"
                     
                    />
                  
                  </div>

                </div>
              </div>
            </div>
            <Button
              variant="success"
              type="submit"
              className="form-group col-p-5"
            onClick={login}
              
            >
              Submit
            </Button>
            <Button
            
              variant="outline-danger"
              type="cancle"
              className="form-group col-m-2 p-2"
              // onClick={resetHandler}//new
            >
              Cancel
            </Button>
            
          </div>
          <h1
            style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
          >
            {registerStatus}
          </h1>
        </div>
      </form>
    {/*</Formik>*/}

    </div>
    

  );
}

export default Form;


