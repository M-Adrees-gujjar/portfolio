import "./Project.css";

const products = [
  {
    id: 1,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715788261/seebiz-project_x8uo0e.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/seebiz-Project/",
  },
  {
    id: 2,
    name: "Student-Teacher Management & Social Media Platform",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1722358469/examSTMP_ajssmx.jpg",
    imageAlt:
      "Designed and developed a frontend interface with React.js, integrating CSS, Tailwind , and Socket.io for realtime interaction. Implemented backend functionalities using Node.js and Express, featuring user authentication, signup, login, and profile management. Utilized MongoDB with Mongoose for efficient database management. Integrated Cloudinary and Multer for handling file uploads, and employed Node Mailer for sending login details to students",
    price: "$35",
    color: "Black",
    link: "https://stdtchportal.vercel.app/",
  },
  {
    id: 11,
    name: "Simple Weather App",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715794509/js_01_qgatz1.jpg",
    imageAlt:
      "Built a weather app using a Weather API. Created a user-friendly interface with HTML, CSS, and Bootstrap. Used JavaScript to add features allowing users to check, search, and manage weather info easily.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/weather_app/",
  },
  {
    id: 23,
    name: "CRUD Application with Local Storage",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715794673/js_02_ve3dy4.jpg",
    imageAlt:
      "Designed the user interface using HTML and styled it with CSS and Bootstrap. Implemented CRUD functionality using JavaScript to enable users to create,read, update, and delete data entries.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/crud_project/",
  },
  {
    id: 22,
    name: "Blogging and Course Platform",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1722358089/blogSite_ygv4rv.jpg",
    imageAlt:
      "Built a MERN stack application with Tailwind CSS. Added admin features to manage blogs and courses. Designed interfaces for reading blogs and viewing courses.Integrated a rich text editor(Jodit Editor) for blog creation. Deployed on Vercel for reliable performance.",
    price: "$35",
    color: "Black",
    link: "https://quran-online-school.vercel.app/",
  },
  {
    id: 2,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793276/08_qwcjxv.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_08/",
  },
  {
    id: 3,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793196/09_ittfej.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_09/",
  },
  {
    id: 4,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793101/10_j2trl0.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_10/",
  },
  {
    id: 5,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715792996/11_l0arts.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_11/",
  },

  {
    id: 6,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793483/07_itt3tx.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_07/",
  },
  {
    id: 7,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793620/06_uzew9w.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_06/",
  },
  {
    id: 8,
    name: "Website Template Layout Design",
    imageSrc:
      "https://res.cloudinary.com/dkzca4hyd/image/upload/v1715793690/05_cdqo1o.jpg",
    imageAlt:
      "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
    price: "$35",
    color: "Black",
    link: "https://m-adrees-gujjar.github.io/project_05/",
  },

  // More products...
];

export default function Js_project() {
  return (
    <div className="bg-gray-950 text-white main_project">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-full my-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-black rounded-md shadow-lg overflow-hidden h-80"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden box_hover h-2/3">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center  box_overlay">
                  <p className="see_more">
                    <a href={product.link} target="_blank">
                      See More
                    </a>
                  </p>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between gap-2 bg-gray-700 h-1/3">
                <div>
                  <h3 className="text-sm font-bold">
                    <a href={product.link} className="hover:underline">
                      {product.name}
                    </a>
                  </h3>
                </div>
                <div>
                  <p className="text-sm">{product.imageAlt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function Project() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 my-20">
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 box_hover">
//                 <img
//                   src={product.imageSrc}
//                   alt={product.imageAlt}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//                 <div className="box_overlay">
//                     <p className='see_more'>
//                       <a href={product.link} target='_blank'>See More</a>
//                     </p>
//                 </div>
//               </div>
//               <div className="mt-4 flex justify-between flex-col gap-2">
//                 <div>
//                   <h3 className="text-sm text-gray-700 font-bold">
//                     <a href={product.link}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                 </div>
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <p>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.imageAlt}
//                     </p>
//                   </h3>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
