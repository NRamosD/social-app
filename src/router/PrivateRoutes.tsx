import { Navigate } from "react-router-dom"

type Props = {
    children: React.ReactNode
}

const PrivateRoutes = ({
    children
}: Props) => {
    const token = "12312321312"
    return token ? <>{children}</> : <Navigate to="/auth" />
}

export default PrivateRoutes