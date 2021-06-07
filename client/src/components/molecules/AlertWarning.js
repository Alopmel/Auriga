import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import P from '../atoms/P'
import Span from '../atoms/Span'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import H3 from '../atoms/H3';




export const AlertWarning = () => {
    return (
        <DivAlert warning>
            
            <Span warning><RiCheckboxBlankCircleFill/> </Span>
            <H3>Vencimiento póliza de seguro</H3>

        </DivAlert>
    )
}
