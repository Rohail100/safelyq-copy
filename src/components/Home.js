import React from 'react'
import Appointments from './appointments/Appointments'
import Wrapper from './layouts/Wrapper'
import Suggestions from './Suggestions'

function Home() {
    return (
        <Wrapper>
            <Appointments />
            <Suggestions />
        </Wrapper>
    )
}

export default Home