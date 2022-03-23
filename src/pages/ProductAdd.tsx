import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from '../types/product';
import { useNavigate } from 'react-router-dom';
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type formValues = {
    name: string,
    price: number
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<formValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<formValues> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }

    return (
        <div><form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"{...register('name', { required: true, minLength: 5 })} />
            {errors.name && errors.name.type === 'required' && <span>Requied</span>}
            {errors.name && errors.name.type === 'minLength' && <span>minLength</span>}
            <input type="number" {...register('price', { required: true })} />
            <button>Submit</button>
        </form></div>
    )
}

export default ProductAdd