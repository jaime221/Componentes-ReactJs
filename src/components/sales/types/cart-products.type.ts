export interface ICartProduct {
    id : number , 
    productName : string
    price : number , 
    stock : number 
    image : string
}
export const dataCartProduct : ICartProduct[] = [{
    id: 1,
    productName: "MARUCHAN",
    price: 1,
    stock: 5,
    image: "https://images.heb.com/is/image/HEBGrocery/000133630-1"
},{
    id: 2,
    productName: "AZUCAR",
    price: 0.50,
    stock: 3,
    image: "https://www.despensaexpress.com.sv/wp-content/uploads/2020/08/azucar-del-canal.jpg"
},
{
    id: 3,
    productName: "GASEOSA",
    price: 2,
    stock: 3,
    image: "https://mistiendas.com.co/1810-large_default/gaseosa-coca-cola-x3lts.jpg"
}]
    export interface ICartProductStore {
        cart_product: ICartProduct[];
        AddToCart: (product: ICartProduct) => void;
         RemoveFromCart: (productId: number) => void;
         IncreaseQuantity: (productId: number) => void;
         DecreaseQuantity: (productId: number) => void;
         ClearCart: () => void;
    }    
