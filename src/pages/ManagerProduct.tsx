import React from 'react'
import { ProductType } from '../types/product'
import "bootstrap/dist/css/bootstrap.min.css";
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
                            <td><button type="button" className="btn btn-primary">Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default ManagerProduct