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
    background-color: ${COLORS.BLUE};
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
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
    