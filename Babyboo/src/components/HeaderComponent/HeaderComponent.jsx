import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
// import Search from 'antd/es/transfer/search';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
  return (
    <div >
<WrapperHeader gutter={16}>
      <Col span={6}>
        <WrapperTextHeader>BABYBOO</WrapperTextHeader>
      </Col>
      <Col span={10}>
      <ButtonInputSearch
      size="32px"
      bordered = {false}
      textButton="Tìm Kiếm"
      placeholder="input search text"
        />
      </Col>
      <Col span={8} style={{display:'flex', gap:'20px'}}>
      <WrapperHeaderAccount>
      <UserOutlined style={{fontSize: '30px'}} />
        <div>
          <WrapperTextHeaderSmall>Đăng Nhập/Đăng ký</WrapperTextHeaderSmall>
          <div>
          <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
          <CaretDownOutlined />
        </div>
        </div> 
        </WrapperHeaderAccount>
        <div>
            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>    
    </div >
  )
}

export default HeaderComponent
