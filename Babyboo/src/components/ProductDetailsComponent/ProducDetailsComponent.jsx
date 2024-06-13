import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/product1.png'
import imageProductSmall from '../../assets/images/sua-meiji-so-9.jpg'
import {StarFilled, PlusOutlined, MinusOutlined} from '@ant-design/icons'
import { WrapperStyleColImage, WrapperAdddressProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleImageSmall,
     WrapperStyleNameProduct, WrapperStyleTextSell, 
     WrapperQualityProduct,
     WrapperInputNumber,} from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProducDetailsComponent = () => {
    const onChange = () => {}

  return (
    <Row style={{padding:'16px', background:'#fff', borderRadius: '4px' }}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{paddingTop: '10px', justifyContent:'space-between' }}>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
            </WrapperStyleColImage>            
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
            </WrapperStyleColImage>
        </Row>
             </Col>
        <Col span={14} style={{ paddingLeft: '10px'}}>
            <WrapperStyleNameProduct>Sữa Meiji số 9 nội địa Nhật 800g (1 - 3 tuổi)</WrapperStyleNameProduct>
        
        <div>
          <StarFilled style={{fontSize: '12px', color:'yellow'}} />
          <StarFilled style={{fontSize: '12px', color:'yellow'}} />
          <StarFilled style={{fontSize: '12px', color:'yellow'}} />
          <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAdddressProduct >
            <span >Giao đến </span>
            <span className='address'>Q. 9, P. Long Bình, TP Thủ Đức</span> - 
            <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAdddressProduct>
        <div style={{ margin: '10px 0 20px', padding:'10px 0' , borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
            <div style={{marginBottom: '10px' }}>Số Lượng</div>
            <WrapperQualityProduct>
                    <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
                    <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />
                    <PlusOutlined style={{color: '#000', fontSize: '20px'}} />
                </WrapperQualityProduct>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap:'12px' }}>
            <ButtonComponent
                // bordered={false}
                size={40}
                styleButton={{ 
                    background: '#D37C70',
                    height: '48px',
                    width: '220px',
                    border: 'none',
                    borderRadius: '4px' 
                }}
                textButton={'Thêm vào giỏ hàng'}
                styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>

                <ButtonComponent
                // bordered={false}
                size={40}
                styleButton={{ 
                    background: '#fff',
                    height: '48px',
                    width: '220px',
                    border: '1px solid #90C5EB',
                    borderRadius: '4px' 
                }}
                textButton={'Mua ngay'}
                styleTextButton={{color: '#90C5EB', fontSize: '15px' }}
            ></ButtonComponent>



        </div>
        </Col>
    </Row>


  )
}

export default ProducDetailsComponent
