import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import db from '../firebase/appConfig';
import { useNavigate } from 'react-router-dom';
import './RegisterProduct.css'; // Asegúrate de crear este archivo CSS

export default function RegisterProduct() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const saveProduct = async (data) => {
        console.log("Se ha guardado");
        console.log(data);
        
        try {
            await addDoc(collection(db, "products"), {
                name: data.name,
                description: data.description
            });
        } catch (error) {
            console.error("Error al registrar el producto", error);
        }
        navigate("/productos");
    };

    return (
        <div className="register-product-container">
            <h2 className="title">Registro de Productos</h2>
            <form className="register-form" onSubmit={handleSubmit(saveProduct)}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Ingresar Producto:</label>
                    <input type="text" {...register('name')} className="form-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    <input type="text" {...register('description')} className="form-input" />
                </div>

                <div className="form-group">
                    <button type='submit' className="submit-button">Guardar Producto</button>
                </div>
            </form>
        </div>
    );
}