import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type SigninProps = {}
type FormInputs = {
  email: String,
  password: String
}

const Signin = (props: SigninProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
  const onSubmit:SubmitHandler<FormInputs> = (data) =>{
    console.log(data);
    
  };
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" {...register("email")} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" {...register("password")}>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form></div>
  )
}

export default Signin