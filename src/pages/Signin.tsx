import React from "react";
import { UserType } from "../types/users";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Signin } from "../api/users";
import { authenticate } from "./utils/localStorage";


type Props = {};
type FormInput = {
  email: String;
  password: String;
};
const Singin = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {

    const {data: user } = await Signin(data);
    authenticate(user, () => navigate('/'))
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" {...register("email")} />
        <input type="password" placeholder="password"{...register("password")} />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Singin;