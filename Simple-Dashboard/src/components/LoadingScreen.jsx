import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingScreen() {
  return (
    <Container className='loadingContainer' style={{textAlign:"center"}}>
        <Spinner style={{color: 'rgba(13,110,253,255)'}} animation="border" className='iconSpinner' role='status'/>
    </Container>
  )
}
