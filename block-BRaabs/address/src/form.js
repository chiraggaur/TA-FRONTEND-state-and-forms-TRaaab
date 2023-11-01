import React from "react";
class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingAddress: "",
      shippingzip: "",
      shippingcity: "",
      shippingcountry: "",
      billingAddress: "",
      billingzip: "",
      billinngcity: "",
      billingcountry: "",
      checked: false,
      errors: {
        shippingAddress: "",
        billingAddress: "",
      },
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case "shippingAddress":
        errors.shippingAddress =
          value.length < 8 ? "Address must be 8 characters or more" : "";
        break;
      case "billingAddress":
        errors.billingAddress =
          value.length < 8 ? "Address must be 8 characters or more" : "";
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errors,
    });
  };

  handleChecked = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { shippingAddress, billingAddress } = this.state.errors;
    return (
      <>
        <form>
          <h2> Shipping Address</h2>
          <label htmlFor="addressInput">Address</label>
          <input
            type="Text"
            value={this.state.shippingAddress}
            name="shippingAddress"
            id="addressInput"
            placeholder="Enter Address"
            onChange={this.handleChange}
            className={shippingAddress ? "address Field" : "address"}
          ></input>
          <span className="error">{shippingAddress}</span>
          <label>Zip</label>
          <input
            name="shippingzip"
            type="Number"
            value={this.state.shippingzip}
            placeholder="enter zip code "
            onChange={this.handleChange}
          ></input>
          <label>City</label>
          <input type="Text"></input>
          <label>Country</label>
          <input type="Text"></input>
          <input
            type="CheckBox"
            onChange={this.handleChecked}
            checked={this.state.checked}
          ></input>
          <span>Billing address same as shipping address</span>
          <h2> Billing Address</h2>
          <label htmlFor="addressInput">Address</label>
          <input
            type="Text"
            value={
              this.state.checked
                ? this.state.shippingAddress
                : this.state.billingAddress
            }
            name="billingAddress"
            id="addressInput"
            placeholder="Enter Address"
            onChange={this.handleChange}
            className={billingAddress ? "address Field" : "address"}
          ></input>
          <span className="error">{billingAddress}</span>
          <label>Zip</label>
          <input
            value={
              this.state.checked
                ? this.state.shippingzip
                : this.state.billingzip
            }
            type="Number"
            name="billingzip"
            placeholder="enter zip code "
          ></input>
          <label>City</label>
          <input type="Text"></input>
          <label>Country</label>
          <input type="Text"></input>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default Address;
