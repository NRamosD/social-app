import CustomButton from "../../shared/components/CustomButton"

type Props = {}

const Dashboard = ({
    
}: Props) => {
  return (
    <div className=" grid grid-cols-12">
        <h2 className="col-span-6">texto prueba</h2>
        <CustomButton title="Button" onClick={() => {alert("texto de alerta")}}/>
        {/* <button className=" col-span-4">Button</button> */}
    </div>
  )
}

export default Dashboard