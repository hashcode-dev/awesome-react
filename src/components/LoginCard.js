import { useState } from 'react';
import '../styles/LoginCard.css';

export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome Back</h2>

                <div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button onClick={handleSubmit} className="login-btn">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}