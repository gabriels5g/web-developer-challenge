import Image from "next/image"
import bxLogo from "@/assets/bx-logo.png"
import { Container } from "./style"

export function Header() {
  return (
    <Container>
      <Image src={bxLogo} alt="" width={103} height={45}/>
    </Container>
  )
    
  
}