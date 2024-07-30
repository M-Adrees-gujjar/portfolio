import './Skills.css'

const people = [
    {
      name: 'HTML',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965261/html_gs4rlb.png',
    },
    {
      name: 'CSS',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965260/css_p8gvum.png',
    },
    {
      name: 'JavaScript',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965260/js_i5g1h6.png',
    },
    {
      name: 'BootStrap',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788260/bootstrap_n86ye6.png',
    },
    {
      name: 'React JS',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965765/react_fmknln.png',
    },
    {
      name: 'Node Js',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965764/node_xrw70g.png',
    },
    {
      name: 'Express Js',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965765/express_k3mky7.png',
    },
    {
      name: 'Mongo DB',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715965764/mongodb_eixbre.png',
    },
    // More people...
  ]
  export default function Skill() {
    return (
      <div className="bg-gray-900 text-text-Two py-24 sm:py-32" id='skills'>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">CORE SKILLS</h2>
            <p className="mt-6 text-lg leading-8">
              Proficient in HTML, CSS, SASS, Bootstrap, React, Node.js, Express, MongoDB, and Mongoose for web development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-4 gap-y-4 sm:grid-cols-4 grid-cols-2 sm:gap-y-4 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name} className="group rounded-lg overflow-hidden bg-gray-950 box_border h-20">
                <div className="flex items-center gap-x-1 p-4 inline_border rounded-md h-full w-full">
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="lg:text-lg md:text-sm text-xs">{person.name}</h3>
                    <p className="text-sm">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  // export default function Skill() {
  //   return (
  //     <div className="bg-white py-24 sm:py-32">
  //       <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
  //         <div className="max-w-2xl">
  //           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">CORE SKILLS</h2>
  //           <p className="mt-6 text-lg leading-8 text-gray-600">
  //               Proficient in HTML, CSS, SASS, Bootstrap, React, Node.js, Express, MongoDB, and Mongoose for web development.
  //           </p>
  //         </div>
  //         <ul role="list" className="grid gap-x-0 gap-y-4 sm:grid-cols-4 grid-cols-2 sm:gap-y-2 xl:col-span-2">
  //           {people.map((person) => (
  //             <li key={person.name}>
  //               <div className="flex items-center gap-x-1">
  //                 <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
  //                 <div>
  //                   <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
  //                   <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
  //                 </div>
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }
