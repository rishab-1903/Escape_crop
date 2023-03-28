import React from 'react'

const SignIn = () => {
      return (
        <div className="w-100">
          <section  >
      
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-sm">
            <div className="card shadow-2-strong w-100 col-sm" >
              <div className="card-body p-5 text-center">
              <div className="container py-2 ">
                <h3 className="mb-5">Sign in</h3>
    
                <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="col-xs-4 form-control form-control-sm " />
                  <label className="form-label" for="typeEmailX-2">Email</label>
                </div>
    
                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="col-xs-4 form-control form-control-lg" />
                  <label className="form-label" for="typePasswordX-2">Password</label>
                </div>
    
                
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" for="form1Example3"> Remember password </label>
                </div>
    
                <button className="btn btn-success btn-lg btn-block m-3" type="submit">Login</button>
                <hr class="my-4"></hr>
    
                
    
                <button className="btn btn-lg btn-block btn-success m-3" 
                  type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                <button className="btn btn-lg btn-block btn-success mb-2" 
                  type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    
    
     
      
      );
    };

export default SignIn