
import { FaBasketShopping } from 'react-icons/fa6'
import LayoutGlobal from '../../layout/LayoutGlobal'
import SelectedProducts from '../components/products/SelectedProducts'
import SlideInModalGlobal from '../../global/SlideInModalGlobal'
import { useState } from 'react'
import CartProducts from '../components/products/CartProducts'

function NewSale() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <LayoutGlobal title="Nueva Venta">
            <div className="flex justify-end  ">
                <div className="border border-white bg-green-500 rounded-full   ">
                    <FaBasketShopping onClick={() => setOpenModal(true)} className='text-white p-2 cursor-pointer' size={50} />
                </div>

            </div>
            <SelectedProducts></SelectedProducts>

            <SlideInModalGlobal title='Listado de Productos' children={<CartProducts ></CartProducts>} open={openModal} setOpen={setOpenModal}>
                
            </SlideInModalGlobal>
        </LayoutGlobal>
    )
}

export default NewSale