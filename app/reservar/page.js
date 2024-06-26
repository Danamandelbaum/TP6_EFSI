import Link from "next/link";

export default function Reservar(){
    return (
      <div>
      <Link href = "reservar/components/Form">Form</Link>
      <br></br>
      <Link href = "reservar/components/Citas">Reservas</Link>
      </div>
    )
}