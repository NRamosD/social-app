import { Outlet } from 'react-router-dom'

type Props = {}

const GeneralLayout = ({
    
}: Props) => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GeneralLayout