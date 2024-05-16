const people = [
    {
      name: 'HTML',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788260/html_wt561r.png',
    },
    {
      name: 'CSS',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788260/css_in6nyj.png',
    },
    {
      name: 'JavaScript',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/JS_gunih7.png',
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
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/react_yyvrxq.png',
    },
    {
      name: 'Node Js',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/node_ysdzak.png',
    },
    {
      name: 'Express Js',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788260/express_ydtxz9.png',
    },
    {
      name: 'Mongo DB',
      role: '',
      imageUrl:
        'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/mongo-db_k1avwf.png',
    },
    // More people...
  ]
  export default function Skill() {
    return (
      <div className="bg-gray-900 text-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">CORE SKILLS</h2>
            <p className="mt-6 text-lg leading-8">
              Proficient in HTML, CSS, SASS, Bootstrap, React, Node.js, Express, MongoDB, and Mongoose for web development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-0 gap-y-4 sm:grid-cols-4 grid-cols-2 sm:gap-y-2 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name} className="group rounded-lg overflow-hidden bg-black shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                <div className="flex items-center gap-x-1 p-4">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold">{person.name}</h3>
                    <p className="text-sm">{person.role}</p>
                  </div>
                </div>
                {/* Animation Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 flex items-center justify-center transition duration-300 ease-in-out group-hover:opacity-0">
                  {/* No text displayed */}
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
