import type { NextPage } from "next"
import Navbar from "../components/Navbar"

const About: NextPage = () => {
  return (
    <>
      <Navbar current='About' />

      This will be About page.
    </>
  )
}

export default About