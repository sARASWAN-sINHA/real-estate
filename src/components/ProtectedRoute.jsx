import { Navigate } from 'react-router'
import { useAuthContext } from '../AuthContext'

const ProtectedRoute = ({children}) => {
    const { isAuthenticated } = useAuthContext()

    // If the user is not authenticated, redirect to the sign-in page
    return (
        isAuthenticated ? children : <Navigate to="/sign-in" />
    )
}
export default ProtectedRoute