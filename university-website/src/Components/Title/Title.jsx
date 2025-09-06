import React from 'react'

const Title = ({para, heading}) => {
  return (
    <div class="flex flex-col text-center mt-20">
        <p className="text-lg">{para}</p>
        <h2 className="font-bold text-3xl">{heading}</h2>
    </div>
  )
}

export default Title