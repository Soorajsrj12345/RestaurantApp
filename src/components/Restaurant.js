import {React,useState,useEffect} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restList } from '../actions/restaction';
import { useDispatch,useSelector } from 'react-redux';


function Restaurant() {



   const dispatch=useDispatch()

   useEffect(()=>{

     dispatch(restList())
   },[])

   const {restaurantList}=useSelector(state=>state.restaurantReducer)


  return (
    <Row>
      {
        restaurantList.map(item=>(
         <Col className="p-5" lg={4} md={6} >
          <Restcard restdata={item}></Restcard>
         </Col>
        ))
      }
    </Row>
  )
}

export default Restaurant