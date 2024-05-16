import { NavLink } from "react-router-dom";

const navigation = [
  { name: 'HTML/CSS', href: '/' },
  { name: 'JavaScript', href: '/js' },
  { name: 'MERN Stack', href: '/mern' },
];

export default function SlideBar() {
  return (
    <div className="bg-black text-white">
      <header className="">
        <nav className="lg:flex lg:flex-row sm:flex-col items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="mx-auto max-w-2xl lg:mx-0 flex lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight">PROJECTS</h2>
          </div>
          <div className="lg:flex lg:gap-x-12 lg:m-0 my-5 flex justify-around">
            {navigation.map((item) => (
              <NavLink 
              key={item.name} 
              to={item.href} 
              className={({ isActive }) => isActive ? 'text-lg font-bold leading-6 border-b-4 border-transparent hover:border-blue-600' : 'text-lg font-bold leading-6 border-b-4 border-transparent'}
            >
              {item.name}
            </NavLink>
            
            
              // <NavLink 
              //   key={item.name} 
              //   to={item.href} 
              //   className="text-lg font-bold leading-6 border-b-4 hover:border-blue-600 border-transparent"
              //   activeClassName="border-blue-600"
              // >
              //   {item.name}
              // </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
      </header>
    </div>
  );
}
