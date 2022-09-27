import React from 'react'
import Business from './Business'
import styled from 'styled-components'

function Businesses({businesses}) {
  return (
    <Wrapper className="is-flex">
        {businesses.map((business, index) => (
            <Business business={business} key={index} />
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
overflow: scroll hidden;
white-space: nowrap;
`

export default Businesses