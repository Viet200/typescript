import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}
type FormInputs = {
  name: string,
  price: number
}
const ProductEdit = (props: ProductEditProps) => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
    };
    getProduct();
  }, [])
  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data);
    props.onUpdate(data);
    navigate("/admin/product")
  }
  return (
    <div><form action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Name' {...register('name')} />
      <input type="number" placeholder='Price'{...register('price')} name="" id="" />
      <button>Update</button>
    </form></div>
  )
}

export default ProductEdit