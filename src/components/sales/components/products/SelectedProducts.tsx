import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useCartProduct } from '../../store/cart-products.store';
import { useState } from 'react';

function SelectedProducts() {
    const { DecreaseQuantity, cart_product, RemoveFromCart, IncreaseQuantity } = useCartProduct();
    const [amountPaid, setAmountPaid] = useState('');
    const total = cart_product.reduce((acc, product) => acc + product.price * product.stock, 0);
    const changeGiven = parseFloat(amountPaid) - total;

    return (
        <div className="py-4 px-2 sm:px-6">
            <ul className="space-y-4">
                {cart_product.map(product => (
                    <li key={product.id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img src={product.image} alt={product.productName} className="w-full md:w-32 md:h-32 object-cover" />
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{product.productName}</h3>
                                <p className="text-md md:text-lg text-gray-600">Precio: <span className="text-green-500">${product.price}</span></p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-sm md:text-md text-gray-600">Cantidad: <span className="font-bold">{product.stock}</span></p>
                                <div className="flex space-x-2">
                                    <button onClick={() => IncreaseQuantity(product.id)} className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"><FaPlus /></button>
                                    <button onClick={() => DecreaseQuantity(product.id)} className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"><FaMinus /></button>
                                    <button onClick={() => RemoveFromCart(product.id)} className="w-8 h-8 flex items-center justify-center bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"><MdOutlineDeleteOutline /></button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h2 className="text-lg md:text-xl font-semibold">Total a Pagar: <span className="text-green-500">${total.toFixed(2)}</span></h2>
                    <input type="number" value={amountPaid} onChange={e => setAmountPaid(e.target.value)} className="border p-2 rounded w-full md:w-auto" placeholder="Ingresa con cuánto paga" />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto mb-2 md:mb-0">Finalizar Compra</button>
                    <p>Vuelto: <span className="text-red-500">${changeGiven.toFixed(2)}</span></p>
                </div>
            </div>
        </div>
    );
}

export default SelectedProducts;
