
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &{
    title: string;
}

const CustomButton = ({
    title,
    ...props
}: Props) => {
  return (
    <button {...props} 
    className=" transition-all bg-amber-600 rounded-xl px-2 shadow-2xl z-20 border-2 border-amber-100
    py-4 m-2 hover:bg-amber-700 hover:focus-within:scale-95 scale-100">{title}</button>
  )
}

export default CustomButton