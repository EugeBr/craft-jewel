import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import service from "../../services/apiHandler"

const FormSignUp = () => {
	const [user, setUser] = useState({ name: "", email: "", password: "" })
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signup(user)
			console.log(res)
			navigate("/signin")
		} catch (error) {
			setError(e.message)
		}
	}
	return (
		<>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Signup</h2>
				<label htmlFor="name">Name</label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.name}
					type="text"
					id="name"
					name="name"
				/>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.email}
					type="email"
					id="email"
					name="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.password}
					type="password"
					id="password"
					name="password"
				/>
				<button>Submit</button>
			</form>
		</>
	)
}

export default FormSignUp
