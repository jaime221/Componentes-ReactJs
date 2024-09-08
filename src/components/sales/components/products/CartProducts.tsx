import { toast } from "react-toastify";
import { useCartProduct } from "../../store/cart-products.store";
import { dataCartProduct, ICartProduct } from "../../types/cart-products.type";
import TableGlobal from "../../../global/TableGlobal";
import { Column } from "../../../global/types/table-global.types";
import { TfiShoppingCart } from "react-icons/tfi";

function CartProducts() {
    const { AddToCart } = useCartProduct();
    const columns: Column<ICartProduct>[] = [
        { Header: 'Foto', accessor: 'image' as keyof ICartProduct, Cell: (item: ICartProduct) => <img src={item.image} alt={item.productName} className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full border-2 border-red-500" /> },
        { Header: 'Nombre', accessor: 'productName' as keyof ICartProduct, cellClass: "py-4 px-2 md:px-5 font-semibold text-gray-800" },
        { Header: 'Stock', accessor: 'stock' as keyof ICartProduct, cellClass: "py-4 px-2 md:px-5 text-red-500  sm:table-cell" },
        { Header: 'Precio', accessor: 'price' as keyof ICartProduct, cellClass: "py-4 px-2 md:px-5 text-lg font-bold text-green-600" },
        {
            Header: 'Acción',
            accessor: 'action' as keyof ICartProduct,
            Cell: (product: ICartProduct) => (
                <button
                    onClick={() => {
                        AddToCart(product);
                        toast.success("Agregado al carrito", {
                            position: "top-right",
                            autoClose: 800,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }}
                    className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                    <TfiShoppingCart />
                </button>
            )
        }
    ];
    return <TableGlobal data={dataCartProduct} columns={columns} />;
}
export default CartProducts;
