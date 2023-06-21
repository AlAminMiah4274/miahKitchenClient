import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import google from '../../Assets/image/logo/googlelogo.png';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {

    const { userLogIn } = useContext(AuthContext);

    const handleLogInForm = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
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
                    <div className='border rounded-full m-5 flex items-center '>
                        <img src={google} alt="" width={40} />
                        <p className='ms-14'>Continue with Google</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;