import React from 'react';
import '../css/Form.css'


const Form = () => {
    return (
     <>
     <br /><br />
       <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
      </div>
      <div className="col-md-7 col-lg-8">
        {/* <h4 className="mb-3">Join Qubool Hai</h4> */}
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6 tstart">
              <label for="firstName" className="form-label" >First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="first name" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6 tstart">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="last name" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12 tstart">
              <label for="username" className="form-label ">Username</label>
              <div className="input-group has-validation">
                <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12 tstart">
              <label for="email" className="form-label">Email <span className="text-muted"></span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            


            <div className="col-md-5">
              <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required=""/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>
          <h5 className='tstart'>Gender</h5>
          <div className="my-3 tstart">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input"  required=""/>
              <label className="form-check-label" for="credit">Male</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" for="debit">Female</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" for="paypal">Others</label>
            </div>
          </div>
          {/* <div className="form-check tstart">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" for="same-address">Male</label>
          </div>

          <div className="form-check tstart">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" for="save-info">Female</label>
          </div>*/}
          <button className="w-100 btn btn-primary btn-lg" type="submit">Sign up</button> 
        </form>
      </div>
    </div>
    </>
    );
}


export default Form;