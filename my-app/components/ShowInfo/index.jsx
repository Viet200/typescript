import React from 'react'

const ShowInfo = (props) => {
    console.log(props);
  return <p>Thông tin user {props.age}</p>
}

export default ShowInfo