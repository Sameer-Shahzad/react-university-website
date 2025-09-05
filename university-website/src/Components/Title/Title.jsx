import React from 'react'

const Title = ({para, heading}) => {
  return (
    <div class="flex flex-col text-center mt-10">
        <p>{para}</p>
        <h2 className="font-bold text-3xl">{heading}</h2>
        </div>
    )
}

export default Title