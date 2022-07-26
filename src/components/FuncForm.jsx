import React, { useState } from "react";

const FunctionalForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const [students, setStudents] = useState([
		{ name: "Eric", email: "eric@ga", gen: 22 },
	]);

	const HandleClick = (e) => {
		 e.preventDefault();
		setStudents(
			[...students, { name, email, gen }],
			setName(""),
			setEmail(""),
			setGen("")
		);
	};
	return (
		<div>
			<h1>Register here</h1>
			<form>
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br />
				<label>Gen:</label>
				<input
					type="text"
					name="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
				<br />
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<br />
				<button onClick={HandleClick}>submit</button>
			</form>
			{students.map((user, index) => {
				return (
					<div>
						<h1>name:{user.name}</h1>
						<h1>email:{user.email}</h1>
						<h1>Gen:{user.gen}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default FunctionalForm;