import React, { Component } from "react";

class ContactsForm extends Component {
	constructor(props) {
		super();
		this.state = {
			students: [
				
			],
		};
	}

	HandleNameChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
		// console.log(this.state.name);
		// console.log(this.state.email);
		// console.log(this.state.gen);
	};
	HandleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			students: [
				...this.state.students,
				{ name: this.state.name, phone: this.state.phone, location: this.state.location },
			],
		});
	};
	render() {
		return (
			<div style={{ margin: "40px" }}>
				<h1>Contact Form</h1>
				<form>
					<label>Name: </label>
					<input
						type="text"
						name="name"
						value={this.state.students.name}
						onChange={this.HandleNameChange}
					/>
					<br />
					<label>Phone number: </label>
					<input
						type="text"
						name="phone"
						value={this.state.students.phone}
						onChange={this.HandleNameChange}
					/>
					<br />
					<label>Location: </label>
					<input
						type="text"
						name="location"
						value={this.state.students.location}
						onChange={this.HandleNameChange}
					/>
					<br />
					<button onClick={this.HandleSubmit} type="submit">
						Submit
					</button>
				</form>
				{this.state.students.map((item, index) => {
					return (
						<div key={index}>
							<h1>name: {item.name}</h1>
							
							<h1>Phone Number: {item.phone}</h1>

							<h1>location: {item.location}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}
export default ContactsForm;