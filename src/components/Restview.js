import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Restcard.css'
import Review from './Review';
import OperatingTime from './OperatingTime';
import { useDispatch,useSelector } from 'react-redux';
import { restList } from '../actions/restaction';

function Restview() {


  const dispatch=useDispatch()

  
  const params=useParams()
  console.log(params.id);
      
     useEffect(()=>{

      dispatch(restList())
    },[])
  
    const {restaurantList}=useSelector(state=>state.restaurantReducer)

    const restaurant=restaurantList.find(item=>item.id==params.id)
 

  return (
<> 
  {   
  restaurant?(
    <Row>
       
    <Col lg={4} md={3} className='p-5 text-center' style={{marginBottom:'60rem',}}>
    <img className=' first' style={{height:'40rem'}} src={restaurant.photograph}></img>
    </Col>

    <Col className='p-5 m-3 '>
    <ListGroup className='first'>
      <ListGroup.Item className='bg-dark fs-1 text-center'><h1 style={{color:" rgb(204, 71, 233)"}} >{restaurant.name}</h1></ListGroup.Item>
      <ListGroup.Item className='bg-dark fs-3  text-white'>{restaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item className='bg-dark fs-3 text-white'>{restaurant.address}</ListGroup.Item>
      <ListGroup.Item className='bg-dark fs-3 text-white'>{restaurant.latlng.lat}</ListGroup.Item>
      <ListGroup.Item className='bg-dark' >

      <div className=' mt-2 p-3 '><OperatingTime timeData={restaurant.operating_hours} /></div>
      <div className=' mt-2 p-3'><Review reviewData={restaurant.reviews} /> </div>


      </ListGroup.Item> 

    </ListGroup>
    </Col>


   </Row> ):""
  
   }
   </> 

  )
}

export default Restview