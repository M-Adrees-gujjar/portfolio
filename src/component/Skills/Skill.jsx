const people = [
    {
      name: 'HTML',
      role: '',
      imageUrl:
        '/src/assets/Images/html.png',
    },
    {
      name: 'CSS',
      role: '',
      imageUrl:
        '/src/assets/Images/css.png',
    },
    {
      name: 'JavaScript',
      role: '',
      imageUrl:
        '/src/assets/Images/JS.png',
    },
    {
      name: 'BootStrap',
      role: '',
      imageUrl:
        '/src/assets/Images/bootstrap.png',
    },
    {
      name: 'React JS',
      role: '',
      imageUrl:
        '/src/assets/Images/react.png',
    },
    {
      name: 'Node Js',
      role: '',
      imageUrl:
        '/src/assets/Images/node.png',
    },
    {
      name: 'Express Js',
      role: '',
      imageUrl:
        '/src/assets/Images/express.png',
    },
    {
      name: 'Mongo DB',
      role: '',
      imageUrl:
        '/src/assets/Images/mongo-db.png',
    },
    // More people...
  ]

  export default function Skill() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">CORE SKILLS</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Proficient in HTML, CSS, SASS, Bootstrap, React, Node.js, Express, MongoDB, and Mongoose for web development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }