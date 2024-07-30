const posts = [
    {
      id: 1,
      title: 'Web Developer Trainee',
      href: '#',
      description:
        "I completed a year of web development training, starting with HTML, CSS, SASS, and Bootstrap, then advancing to the MERN stack: React, Node js, Express, and MongoDB with Mongoose. By the program's end, I successfully delivered multiple projects",
      date: 'One Year',
      datetime: '2023-2024',
      category: { title: 'June-2023 to June-2024', href: '#' },
      author: {
        name: 'Software Company',
        role: 'SeeBiz PVT LTD Lahore',
        href: 'https://see.biz/',
        imageUrl:
          'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/seebiz_myuc8v.jpg',
      },
    },
    // More posts...
  ]

  // export default function Experience() {
  //   return (
  //     <div className="bg-white py-2 sm:py-2">
  //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //         <div className="mx-auto max-w-2xl lg:mx-0">
  //           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PROFESSIONAL EXPERIENCE</h2>
  //         </div>
  //         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
  //           {posts.map((post) => (
  //             <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
  //               <div className="flex items-center gap-x-4 text-xs">
  //                 <time dateTime={post.datetime} className="text-gray-500">
  //                   {post.date}
  //                 </time>
  //                 <a
  //                   href={post.category.href}
  //                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
  //                 >
  //                   {post.category.title}
  //                 </a>
  //               </div>
  //               <div className="group relative">
  //                 <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
  //                   <a href={post.href}>
  //                     <span className="absolute inset-0" />
  //                     {post.title}
  //                   </a>
  //                 </h3>
  //                 <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
  //               </div>
  //               <div className="relative mt-8 flex items-center gap-x-4">
  //                 <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
  //                 <div className="text-sm leading-6">
  //                   <p className="font-semibold text-gray-900">
  //                     <a href={post.author.href}>
  //                       <span className="absolute inset-0" />
  //                       {post.author.name}
  //                     </a>
  //                   </p>
  //                   <p className="text-gray-600">{post.author.role}</p>
  //                 </div>
  //               </div>
  //             </article>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  

  export default function Experience() {
    return (
      <div className="bg-black text-text-Two py-2 sm:py-2" id="experience">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 my-14">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">PROFESSIONAL EXPERIENCE</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-black px-3 py-1.5 font-medium text-white hover:bg-gray-800"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 
                  text-black group-hover:text-gray-900 transition-all">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-black" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        <span className="text-black">{post.author.name}</span>
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
