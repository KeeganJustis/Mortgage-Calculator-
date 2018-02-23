import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: undefined,
      rate: undefined,
      term: 15,
      month: undefined



    };
    this.handleChange = this.handleChange.bind(this);
    this.calculatemor = this.calculatemor.bind(this);
  }



  handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,

    })

  }
  calculatemor(event) {
    event.preventDefault();
    let principle = this.state.balance;
    let rate = (((this.state.rate) / 100))/12;
    let termlength = (this.state.term*12);
    let upper = rate*(Math.pow((1+rate),termlength));
    let lower = (Math.pow((1+rate),termlength)-1);
    var monthly = principle * (upper / lower);
    var payment = '$' + monthly.toFixed(2) + " is your payment";
    //var payment = '$' + monthly.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " is your payment";
    console.log(payment);
    this.setState ({
      month: payment 
    })
  }

  render() {
    const balance = this.state.balance;
    const rate = this.state.rate;
    const term = this.state.term;
    const payment = this.state.month;
    return (
      <div className='container rounded-circle'>
        <h3 className='text-center'>Mortgage Calculator</h3>
        <form  >
          < div className='form-group row'>
            <label htmlFor='balance' className="col-sm-2 col-form-label"> Loan balance</label>
            <div className="col-sm-10">
               <input className="form-control form-control-lg" name='balance' type='number' value={balance} onChange={this.handleChange}  placeholder="0"/>
          </div>
          </div>


          < div className='form-group row'>
            <label htmlFor='rate' className="col-sm-2 col-form-label"> Interest Rate (%)</label>
            <div className="col-sm-10">
            <input className="form-control form-control-lg" name="rate" type='number' step='0.01' value={rate} onChange={this.handleChange} placeholder="0"/>
            </div>
          </div>



          < div className='form-group row'>
            <label htmlFor='term' className="col-sm-2 col-form-label"> Loan Term (years)</label>
            <div className="col-sm-10">
 <select className="form-control form-control-lg" name='term' value={term} onChange={this.handleChange}>
            <option > 15 </option>
            <option> 30 </option>
          </select>
          </div>
          </div>
         
         
          <button className="btn btn-info  center-block" name='submit' onClick={this.calculatemor} > Calculate </button>
          <div id='output'   >
            <p className="text-center">{payment} </p>
            
          </div>
        </form>

        {/* your JSX goes here */}
      </div>
    );
  }
}
