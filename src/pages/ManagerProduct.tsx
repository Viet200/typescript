import React from 'react'
import { ProductType } from '../types/product'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
type ManagerProductProps = {
    data: ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {

    return (
        <div> <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <NavLink to="" className="btn btn-primary">Sửa</NavLink>
                                <button type="button" className="btn btn-primary">Xóa</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default ManagerProduct