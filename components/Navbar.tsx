import { navLinks } from "../data/navlinks"
import Link from "next/link"

export default function Navbar(props: { current?: string }) {
  return (
    <div className='pl-40 mb-4 shadow-xl dark:bg-gray-800'>
      <nav className="flex"><ul className="flex space-x-12 text-lg">
        {navLinks.map((el) => {
          if (props.current === el.name) {
            return (
              <li className="font-bold py-1" key={el.name}><Link href={el.path}>
                <a>{el.name}</a>
              </Link></li>
            )
          }

          return (
            <li className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 py-1" key={el.name}><Link href={el.path}>
              <a>{el.name}</a>
            </Link></li>
          )
        })}
      </ul></nav>
    </div>
  )
}