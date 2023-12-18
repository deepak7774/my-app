import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChooseDiamondProduct } from './AllRings/ChooseDiamondPage/ChooseDiamondProduct/ChooseDiamondProduct'
import { ChooseRingProduct } from './AllRings/ChooseSettingPage/ChooseRingProduct/ChooseRingProduct'
import { AddToBag } from './AllRings/AddToBag'
import Cart from './AllRings/Cart'
import ShapCaret from './AllRings/ChooseDiamondPage/ShapCaret'
import ShopByStyle from './AllRings/ChooseSettingPage/ShopByStyle'
import { DiemondPageTabe1 } from './AllRings/mainPageTabe/diemondPageTabe/DiemondPageTabe1'
import { MainPage } from './AllRings/mainPageTabe/ringPageTable/MainPage'
import { MainPage2 } from './AllRings/mainPageTabe/ringPageTable/MainPage2'
import { MainPage3 } from './AllRings/mainPageTabe/ringPageTable/MainPage3'
import { DiemondPageTabe2 } from './AllRings/mainPageTabe/diemondPageTabe/DiemondPageTabe2'
import { TablePopUp } from './AllRings/ChooseDiamondPage/TablePopUp'
import { MainPage4 } from './AllRings/mainPageTabe/ringPageTable/MainPage4'
import { MainPage5 } from './AllRings/mainPageTabe/ringPageTable/MainPage5'
import { ChooseRingProductCart } from './AllRings/ChooseSettingPage/ChooseRingProduct/ChooseRingProductCart'
import { ChooseDiamondProductCart } from './AllRings/ChooseDiamondPage/ChooseDiamondProduct/ChooseDiamondProductCart'
import { MainPage4_1 } from './AllRings/mainPageTabe/ringPageTable/MainPage4_1'
import { ChooseSetting } from './AllRings/ChooseSettingPage/ChooseSetting'
import { Home } from '../pages/home/Home'

export const Routing = () => {
  return (   
        <Routes>
        {/* <Route path='/' exact element={<MainPage />} /> */}
        <Route path='/' exact element={<Home />}/>
        <Route path='mainPage2/:slug'  element={<MainPage2 />} /> 
        <Route path='mainPage3/:productId' element={<MainPage3/>}/>
        <Route path='mainPage4/:productId' element={<MainPage4/>}/>
        <Route path='mainPage4_1/:productId' element={<MainPage4_1/>}/>
        <Route path='mainPage5/:productId' element={<MainPage5/>}/>
        <Route path='chooseDiamondProduct' element={< ChooseDiamondProduct />} />
        <Route path='chooseDiamondProductCart/:productId' element={< ChooseDiamondProductCart />} />
        <Route path='shopByStyle' element={<ShopByStyle />} /> 
        <Route path='chooseRingProduct/:slug' element={<ChooseRingProduct />} />
        <Route path='chooseRingProductCart/:productId' element={<ChooseRingProductCart />} />
        <Route path='addToBag/:productId' element={<AddToBag />} /> 
        <Route path='cart' element={<Cart/>} />
        <Route path='shapCaret/:productId' element={<ShapCaret/>}/>
        <Route path='diemondPageTabe1' element={<DiemondPageTabe1/>}/>
        <Route path="diemondPageTabe2" element={<DiemondPageTabe2/>}/>  
        <Route path="mainPage3/:productId" element={<TablePopUp/>}/>
        <Route path="ChooseSetting" element={<ChooseSetting/>}/>      
      </Routes> 
    
  )
}
