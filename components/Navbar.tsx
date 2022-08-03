import { navLinks } from "../data/navlinks"
import Link from "next/link"

export default function Navbar(props: {current: string}) {
  return (
    <div className='pl-40 pt-8 pb-6 mb-4 shadow-xl dark:bg-gray-800'>
        <nav className="flex"><ul className="flex space-x-12 text-lg">
            {navLinks.map((el) => {
                if (props.current === el.name){
                    return (
                        <Link href={el.path} key={el.name}><a>
                            <li className="font-bold underline">{el.name}</li>
                        </a></Link>
                    )
                }
                
                return (
                    <Link href={el.path} key={el.name}><a>
                        <li>{el.name}</li>
                    </a></Link>
                )
            })}
        </ul></nav>
    </div>
  )
}