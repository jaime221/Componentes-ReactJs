import LayoutGlobal from '../../layout/LayoutGlobal'
import ListUsers from '../components/ListUsers'

function UserPage() {
    return (
        <LayoutGlobal title='Listado de Usuarios'>
            <ListUsers></ListUsers>
        </LayoutGlobal>
    )
}

export default UserPage