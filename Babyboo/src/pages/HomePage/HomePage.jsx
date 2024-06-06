import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2  from '../../assets/images/slider2.png'
import slider3  from '../../assets/images/slider3.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'

const HomePage = () => {
  const arr= ['Trẻ sơ sinh','Trẻ từ 1-3 tuổi','Mẹ bầu']
  return (
    <>
        <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item) =>{
          return(
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
      </div>

      <div id='container' style={{background: '#efefef', padding:'0 120px', height:'1000px'}} >
      <SliderComponent  arrImages={[slider1, slider2, slider3]}/>
        <div style={{marginTop: '20px', display:'flex', alignItems:'center', gap:'20px'}}>
          <CardComponent />
        </div>
        <NavBarComponent/>
      </div>
    </>

    
  )
}

export default HomePage
