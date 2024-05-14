import './Project.css'

const products = [
    {
      id: 1,
      name: 'Website Template Layout Design',
      imageSrc: '/src/assets/Images/seebiz-project.JPG',
      imageAlt: "To create a website template layout ,I utilized my skills in HTML, CSS, SASS and Bootstrap.",
      price: '$35',
      color: 'Black',
      link : 'https://m-adrees-gujjar.github.io/seebiz-Project/'
    },
    // More products...
  ]

  export default function Project() {
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
                      <p>
                        <a href={product.link}>See More</a>
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
  