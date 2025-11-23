import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './Auth.css'

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const { signIn, signUp } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setMessage('')

        // Validation
        if (!email || !password) {
            setError('Please fill in all fields')
            return
        }

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)

        try {
            if (isLogin) {
                // Login
                const { error } = await signIn(email, password)
                if (error) {
                    setError(error.message)
                }
            } else {
                // Sign up
                const { error } = await signUp(email, password)
                if (error) {
                    setError(error.message)
                } else {
                    setMessage('Account created successfully! Please check your email to verify your account.')
                }
            }
        } catch (err) {
            setError('An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    const toggleMode = () => {
        setIsLogin(!isLogin)
        setError('')
        setMessage('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className="auth-container">
            <div className="auth-background">
                <div className="auth-gradient-1"></div>
                <div className="auth-gradient-2"></div>
                <div className="auth-gradient-3"></div>
            </div>

            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <span className="auth-corn-icon">🌽</span>
                        <h1>CornAI</h1>
                    </div>
                    <p className="auth-subtitle">
                        {isLogin ? 'Welcome back!' : 'Create your account'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && (
                        <div className="auth-alert auth-error">
                            <span>⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    {message && (
                        <div className="auth-alert auth-success">
                            <span>✓</span>
                            <span>{message}</span>
                        </div>
                    )}

                    <div className="auth-input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            disabled={loading}
                            required
                        />
                    </div>

                    <div className="auth-input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            disabled={loading}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="auth-input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                disabled={loading}
                                required
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="auth-submit-btn"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="auth-spinner"></span>
                        ) : (
                            isLogin ? 'Sign In' : 'Sign Up'
                        )}
                    </button>

                    <div className="auth-divider">
                        <span>or</span>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMode}
                        className="auth-toggle-btn"
                        disabled={loading}
                    >
                        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>🔒 Secure authentication.</p>
                </div>
            </div>
        </div>
    )
}
