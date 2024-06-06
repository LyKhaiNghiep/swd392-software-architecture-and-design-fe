import { Row } from "antd";
import styled  from "styled-components"

const COLORS = {
    BLUE: '#90C5EB',
    PINK: '#FFD8D9',
    PURPLE: '#D3D0FB',
    GREEN: 'CDFDE5',
    WHILE: '#FFF',
    YELLOW: '#FAFDC6'
  };


export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: ${COLORS.BLUE};
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`
export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: ${COLORS.WHILE};
    font-weight: bold;
    text-align : left;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 20px;
    color: ${COLORS.WHILE};
    `
    export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: ${COLORS.WHILE};
    white-space: nowrap;
  
    `
    