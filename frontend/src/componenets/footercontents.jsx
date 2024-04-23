import React from 'react'

const Footercontents = (props) => {
  return (<>
    <ul className='flex flex-col gap-4'>
        {
            props.content.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
    </ul>
  </>)
}

export default Footercontents