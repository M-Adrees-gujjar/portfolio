import './Project.css'

const products = [
    {
      id: 1,
      name: 'Simple Weather App',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715794509/js_01_qgatz1.jpg',
      imageAlt: "Built a weather app using a Weather API. Created a user-friendly interface with HTML, CSS, and Bootstrap. Used JavaScript to add features allowing users to check, search, and manage weather info easily.",
      price: '$35',
      color: 'Black',
      link : 'https://m-adrees-gujjar.github.io/weather_app/'
    },
    {
      id: 1,
      name: 'CRUD Application with Local Storage',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1715794673/js_02_ve3dy4.jpg',
      imageAlt: "Designed the user interface using HTML and styled it with CSS and Bootstrap. Implemented CRUD functionality using JavaScript to enable users to create,read, update, and delete data entries.",
      price: '$35',
      color: 'Black',
      link : 'https://m-adrees-gujjar.github.io/crud_project/'
    },
    // More products...
  ]

  export default function Js_project() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 my-20">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 box_hover">
                  {/* jjjjjj */}
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  <div className="box_overlay">
                      <p className='see_more'>
                        <a href={product.link} target='_blank'>See More</a>
                      </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between flex-col gap-2">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      <a href={product.link}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <p>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.imageAlt}
                      </p>
                    </h3>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  