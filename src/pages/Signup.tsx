import React from 'react';
import { Add } from '../api/users';
import { UserType } from '../types/users';
import { useForm, SubmitHandler } from 'react-hook-form';


type SignupProps = {}
type FormInputs = {
    email: string;
    name: string;
    phone: number;
    password: string
}
const Signup = (props: SignupProps) => {
    const { register, handleSubmit, watch, formState: { errors  } } = useForm<FormInputs>();
    const onSubmit:SubmitHandler<FormInputs> = async (data) =>{
        const onHnadleSignup = async (signup: UserType) =>{
            const {data} = await Add(signup);
            console.log(data);
            
        }
        onHnadleSignup(data);
    }
    return (
        <div><form  onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" {...register("email")} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Họ tên</label>
                <input type="text" className="form-control" id="exampleInputEmail1" {...register("name")} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
                <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Số điện thoại</label>
                <input type="number" className="form-control" id="exampleInputPassword1" {...register("phone")} />
            </div>
            <button type="submit" className="btn btn-primary">Đăng ký</button>
        </form></div>
    )
}

export default Signup