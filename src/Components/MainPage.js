import React from 'react'
import '../css/mainpage.css'
import {useNavigate} from 'react-router-dom'


function MainPage() {
    const navigate = useNavigate()
  return (
    <div className='.mainParent'>

      <div className="context"> 
      <h1>DC_INFOTECH</h1>
      <div className="loader">
      <div style={{"--i": 9,display:'flex',justifyContent:'center',alignItems:'center'}}>W</div>
      <div style={{"--i": 8.5,display:'flex',justifyContent:'center',alignItems:'center'}}>E</div>
      <div style={{"--i": 8,display:'flex',justifyContent:'center',alignItems:'center'}}>L</div>
      <div style={{"--i": 7.5,display:'flex',justifyContent:'center',alignItems:'center'}}>C</div>
      <div style={{"--i": 7,display:'flex',justifyContent:'center',alignItems:'center'}}>O</div>
      <div style={{"--i": 6.5,display:'flex',justifyContent:'center',alignItems:'center'}}>M</div>
      <div style={{"--i": 6,display:'flex',justifyContent:'center',alignItems:'center'}}>E</div>
     
    </div>

     <div className="feed">
    <div className="box b">
      <p  
        onClick={() => navigate('/feedback')}
        style={{ cursor: 'pointer' }}>Customer Feedback</p>
     </div>
    </div>
    
    </div>
  

            <div className="area" >
              <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
              </ul>
            </div>
  </div>
  )
}

export default MainPage
