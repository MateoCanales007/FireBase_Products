import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/appConfig';
import { signOut } from 'firebase/auth';

export default function Home() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a Firebase</h1>
            <p className="mb-4">Usuario: {auth.currentUser?.email}</p>
            <div className="space-x-4">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
}