import { toast } from "react-toastify";
import { useCartProduct } from "../../store/cart-products.store";
import { dataCartProduct } from "../../types/cart-products.type";
import { TfiShoppingCart } from "react-icons/tfi";

function CartProducts() {
    const { AddToCart } = useCartProduct();
    return (
        <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
                <thead>
                    <tr className="bg-red-500 text-white">
                        <th className="py-3 px-5 text-left">Imagen</th>
                        <th className="py-3 px-5 text-left">Nombre</th>
                        <th className="py-3 px-5 text-left">Stock</th>
                        <th className="py-3 px-5 text-left">Precio</th>
                        <th className="py-3 px-5 text-left">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCartProduct.map((product, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td className="py-1 px-2">
                                <img
                                    src={product.image}
                                    alt={product.productName}
                                    className="w-16 h-16 object-cover rounded-full border-2 border-red-500"
                                />
                            </td>
                            <td className="py-4 px-5 font-semibold text-gray-800">
                                {product.productName}
                            </td>
                            <td className="py-4 px-5 text-red-500">{product.stock}</td>
                            <td className="py-4 px-5 text-lg font-bold text-green-600">
                                ${product.price}
                            </td>
                            <td className="py-4 px-5">
                                <button 
                                    onClick={() => {
                                        AddToCart(product);
                                        toast.success("Agregado al carrito", {
                                            position: "top-right",
                                            autoClose: 800, // Ajusta la duración de la alerta a 2 segundos
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                    }} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                                >
                                    <TfiShoppingCart />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CartProducts;
