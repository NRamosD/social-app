import { Outlet } from 'react-router-dom'

type Props = {}

const GeneralLayout = ({
    
}: Props) => {
  return (
    <div className='w-full h-screen p-10 bg-[#03223e]'>
      <div className=' bg-[#0c3457] px-2 h-full rounded-2xl shadow-2xl'>
        <Outlet />
      </div>
    </div>
  )
}

export default GeneralLayout