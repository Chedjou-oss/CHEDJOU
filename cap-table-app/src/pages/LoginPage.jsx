import React, { useState }from 'react';
import AppButton from '../components/ui/AppButton/AppButton';
import FormField from '../components/ui/FormField/FormField';
import axios from 'axios';

function LoginPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email || !password){
            setErrorMessage('Entrer vos identifiants');
            return;
        }

        try {
            const response = await axios.post('/api/token', {email, password});

            localStorage.setItem('token', response.data.access);
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('user_id', response.data.user_id);

            window.location.href='/dashboard';

        } catch {
            setErrorMessage('Identifiants incorrects');
        }
    };

    return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2>Connexion</h2>
        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <AppButton type="submit" label="Se connecter" />
      </form>
    </div>
  )
}

export default LoginPage;
