import { NavLink } from "react-router-dom"

const navigation = [
  { name: 'HTML/CSS', href: '/' },
  { name: 'JavaScript', href: '/js' },
  { name: 'MERN Stack', href: '/mern' },
]

export default function SlideBar() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 z-50">
        <nav className="lg:flex lg:flex-row sm:flex-col items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="mx-auto max-w-2xl lg:mx-0 flex lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PROJECTS</h2>
          </div>
          <div className="lg:flex lg:gap-x-12 lg:m-0 my-5 flex justify-around">
            {navigation.map((item) => (
                <NavLink key={item.name} to={item.href} className={(isActive)=>`text-lg font-bold leading-6 text-gray-900 border-b-4 hover:border-blue-600
                ${isActive ? "border-blue-600" : "border-green-600"}`} > {item.name}</NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
      </header>
    </div>
  )
}
