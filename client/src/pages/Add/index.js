import Button from '@mui/material/Button';
import { postDatas } from "../../api/request";
import { TextField } from '@mui/material';
import Swal from "sweetalert2"
import { useFormik} from "formik"
import Style from "./index.module.css"
import {Helmet} from "react-helmet";
import { examValidation } from '../../validation/examValidation';
function Add() {

  function handleSubmit(values,action){
    postDatas(values)
    console.log(values)
    console.log(action)
    Swal.fire({
      position: 'bottom-left',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }


  const formik = useFormik({
    initialValues: {
      names: '',
       text:"",
      imageURL: '',
    },
    onSubmit:handleSubmit,
    validationSchema:examValidation,
  });

  return (
    <>
         <Helmet>
          
                <title>Add</title>
             
            </Helmet>
   
      <h1 style={{textAlign:"center",marginTop:"100px"}}>Add Pages</h1>
      
      <form className={Style.form} onSubmit={formik.handleSubmit}>
      <TextField  className={Style.input}error = {formik.errors.names && formik.touched.names ? true :false}
      onChange={formik.handleChange} onBlur = {formik.handleBlur} name = "names" type = "text" id="outlined-basic" label="Name" variant="outlined" />
    {formik.errors.names && formik.touched.names && <p style={{color:"red"}}>{formik.errors.names}</p>}
     
      <TextField className={Style.input} error = {formik.errors.price && formik.touched.price ? true :false} onChange={formik.handleChange} onBlur = {formik.handleBlur} name = "price" type = "text" id="outlined-basic" label="price" variant="outlined" />
      {formik.errors.price && formik.touched.price && <p style={{color:"red"}}>{formik.errors.price}</p>}
      <TextField className={Style.input} error = {formik.errors.imageURL && formik.touched.imageURL ? true :false} onChange={formik.handleChange} onBlur = {formik.handleBlur} name = "imageURL" type = "text" id="outlined-basic" label="imageURL" variant="outlined" />
      {formik.errors.imageURL && formik.touched.imageURL && <p style={{color:"red"}}>{formik.errors.imageURL}</p>}
      <Button type="submit" variant="contained">Add</Button>
      </form>

    </>
  );
}

export default Add;