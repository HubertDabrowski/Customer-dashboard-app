import React, { Component } from "react";

class AddCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      VAT_number: "",
      address: "",
    };
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="flex direction-column justify-center bg-white mt-10 p-10 pl-20 w-1/3 rounded-2xl bg-opacity-80 shadow-2xl">
          <form onSubmit={this.handleSubmit}>
            <label className="mb-5 block font-bold">
              Enter your name:
              <input
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                className="mb-1 bg-white-200 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
              />
            </label>
            <label className="mb-5 block font-bold">
              Enter VAT number:
              <input
                value={this.state.VAT_number}
                name="VAT_number"
                onChange={this.handleChange}
                className="mb-1 bg-white-200 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
              />
            </label>
            <label className=" mb-5 block font-bold">
              Enter your address:
              <input
                value={this.state.address}
                name="address"
                onChange={this.handleChange}
                className="mb-1 bg-white-200 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
              />
            </label>
            <input
              className="w-40 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert("Customer added!");
    event.preventDefault();

    fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((res) => {
      this.setState({
        name: "",
        VAT_number: "",
        address: "",
      });
      console.log(res);
      return res.json();
    });
  };
}

export default AddCustomers;
