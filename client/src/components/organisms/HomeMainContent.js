import React from 'react'

import DivColumn from '../atoms/DivColumn'
import { BodyContainer } from '../molecules/BodyContainer'
import { HeaderContainer } from '../molecules/HeaderContainer'

const HomeMainContent = () => {
    return (
        <DivColumn>
            <HeaderContainer/>
            <BodyContainer/>
            
        </DivColumn>
    )
}
export default HomeMainContent;