import * as Styled from './styles'

import React from 'react'
import ResumeItem from '../ResumeItem';
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'
const Resume = ({income, expense, total}) => {
    return (
        <Styled.Container>
            <ResumeItem title={'Entradas'} Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title={'Saídas'} Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title={'Total'} Icon={FaDollarSign} value={total}/>
        </Styled.Container>
    )
}

export default Resume;