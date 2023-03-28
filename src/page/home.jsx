import React from 'react'
import one from './image/bg1.webp'
import two from './image/bg3.webp'
import { Container } from 'react-bootstrap'


const home = () => {
  return (
    

    <div className="container mt-3">
    <div className="container mt-5">
      <div className="card mt-5 shadow rounded p-2">
        <div className="card-body">
        <div className="row">
            <div className="col-sm-8 mt-4 px-4">
              <p className="w-100">
              
                <h1 mt-3>Hello, Vnr !</h1>
                <p className="pt-4">
                  Welcome to Escape, a one-stop solution for all your preliminary farming needs and resources.
                  Explore our page now, to escape from your farming difficulties!
                </p>
              </p>
            </div>
            <div className="col-sm-4">
              <div className="col-sm-4 w-50 float-right">
                <img src={one} alt="" />
              </div>
            </div>
    </div>
      </div>
    </div>

<div className="mt-5 row row-cols-3">

<div className="col">
<div className="card-body shadow rounded py-2">

<div className="m-3 p-1">
    <h6>సాగుబడి </h6>
    <h5>Sakshi</h5>
    <a href="https://www.sakshi.com/family/sagubadi"><button>Learn More</button></a>
</div>
</div>
</div>
<div className="col">
<div className="card-body shadow rounded py-2">

<div className="m-3 p-1">
    <h6>రైతులకు ఆర్థిక సహాయం</h6>
    <h5>Eenadu</h5>
    <a href="https://www.eenadu.net/agriculture"><button>Learn More</button></a>
</div>
</div>
</div>
<div className="col">
<div className="card-body shadow rounded py-2">

<div className="m-3 p-2">
    <h6>అన్నదాతల ఉద్యమం</h6>
    <h5>Andhra Jyothi</h5>
    <button>Learn More</button>
</div>
</div>
</div>
<div className="col">
<div className="card-body shadow rounded py-2">

<div className="m-3 p-2">
<h6>సాగుబడి </h6>
    <h5>Sakshi</h5>
    <a href="https://www.sakshi.com/family/sagubadi"><button>Learn More</button></a>
</div>
</div>
</div>
<div className="col">
<div className="card-body shadow rounded py-2">

<div className="m-3 p-2">
<h6>రైతులకు ఆర్థిక సహాయం</h6>
    <h5>Eenadu</h5>
    <a href="https://www.eenadu.net/agriculture"><button>Learn More</button></a>
</div>
</div>
</div>
<div className="col">
<div className="card-body shadow rounded py-2">

<div className="m-3 p-2">
<h6>అన్నదాతల ఉద్యమం</h6>
    <h5>Andhra Jyothi</h5>
    <button>Learn More</button>
</div>
</div>
</div>

</div>


<div className="card mt-5 shadow rounded">
<div className="card-body">
<div className="row">

<div className="col-sm-6">

                <img src={two} alt="" />
              
    
</div>
<div className="col-sm-6 mt-5">
            <h1>Transform your life through agriculture</h1>
            <p>Learn about better agricultural practices,</p>
            <p> advancing in the field, and enriching</p>
            <p>your lives.</p>
            <a href="https://agricoop.nic.in/en/Magazine#gsc.tab=0"><button className='bg-success text-white'>find out how</button></a>
        </div>

</div>
</div>
</div>

</div>
<footer className="bg-white text-gray-700 text-sm py-3 border-top border-gray-300">
      <Container className="d-flex justify-content-between align-items-center">
        <p className="mb-0">© 2023 Escape. All rights reserved.</p>
        <p className="mb-0 text-gray-500">Made by Team Escape</p>
      </Container>
    </footer>
</div>

  )
}

export default home