import React from 'react'
import ProducDetailsComponent from '../../components/ProductDetailsComponent/ProducDetailsComponent'

const ProductDetailsPage = () => {
  return (
    <div style={{ padding: '0 120px', background: '#efefef', height:'1000px' }}>
        <h5>Trang chủ</h5>
        <div style={{display:'flex', background:'#fff'}}>
          <ProducDetailsComponent />
        </div>
    </div>
  )
}

export default ProductDetailsPage
