import ModeDark from '../hooks/ModeDark';
import logo from '../../assets/logo.jpeg';
import { ILayoutGlobalProps } from './types/layout-global.types';

function LayoutGlobal( props: ILayoutGlobalProps) {
    return (
        <>
            <div className="flex h-screen bg-black">
                <div className="hidden md:flex flex-col w-64 bg-gray-900">
                    <div className="flex gap-4 items-center justify-center h-16  ">
                        <img src={logo} alt="Logo" className="h-12 border border-white rounded-full"
                        />
                        <p className='text-white'>JAIME ERNESTO PEREZ </p>
                    </div>
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex-1 px-2 py-4 bg-gray-800 border border-gray-700">
                            <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                                Inicio
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 mt-2 text-white hover:bg-gray-700">
                                Usuarios
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 mt-2 text-white hover:bg-gray-700">
                                Clientes
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex items-center dark:bg-gray-900 justify-between h-16 bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                        <p className="flex items-center px-4 text-white">
                            {props.title}
                        </p>
                        <ModeDark></ModeDark>
                    </div>
                    <div className="w-full h-full xl:p-3 p-5 bg-white    dark:bg-gray-900">
                        <div className="w-full h-full  border p-5 overflow-y-auto custom-scrollbar1 bg-white shadow rounded-xl dark:bg-gray-800 ">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutGlobal
