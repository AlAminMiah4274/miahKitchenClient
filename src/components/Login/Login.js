import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../Assets/image/logo/googlelogo.png';
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { userLogIn, providerLogin, error, setError } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleLogInForm = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                alert(error ? error : 'Loged in successfully');
                console.log(user);
                form.reset();
            })
            .catch(err => {
                const errorMessage = err.message;
                setError(errorMessage);
                alert(error);
                console.error(err)
            })
    };

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    };

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex w-96 bg-white">
                    <form onSubmit={handleLogInForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-5'>New to Miah Kitchen? <Link to='/register'>register</Link></p>
                    <p className='text-center font-medium'>or</p>
                    <button onClick={handleGoogleLogin} className='border rounded-full w-3/5 mx-auto my-5 flex items-center'>
                        <img src={googleLogo} alt="" width={40} />
                        <p className='ms-3'>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Login;