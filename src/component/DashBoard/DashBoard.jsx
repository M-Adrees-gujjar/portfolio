export default function DashBoard() {

  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/19UHgmGaNv9vacT8Teel-mxog654xCTWU/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Adrees-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-900 text-white pt-16" id="about">
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          
        </div>
        <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:py-36">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Muhammad Adrees
            </h1>
            <p className="mt-6 text-lg leading-8">
              Aspiring web developer, studying Computer Science, eager for an internship. Skilled in HTML, CSS,
              JavaScript, and keen on learning React for better websites. Interested in backend tools like Node.js, Express,
              and databases. Knows Git and GitHub for managing code. Enthusiastic about full stack development and
              always ready to learn. Good communicator, passionate about creating awesome web projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={onButtonClick}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-black opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}





// export default function DashBoard() {

//   const onButtonClick = () => {
//     const pdfUrl = "https://drive.google.com/file/d/19UHgmGaNv9vacT8Teel-mxog654xCTWU/view?usp=drive_link";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Adrees-Resume.pdf"; // specify the filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };

//   return (
//     <div className="bg-gray-500">
//       <div className="relative isolate px-6 pt-0 lg:px-8">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:py-36">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                 Muhammad Adrees
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//             Aspiring web developer, studying Computer Science, eager for an internship. Skilled in HTML, CSS,
//             JavaScript, and keen on learning React for better websites. Interested in backend tools like Node.js, Express,
//             and databases. Knows Git and GitHub for managing code. Enthusiastic about full stack development and
//             always ready to learn. Good communicator, passionate about creating awesome web projects.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <button
//                 onClick={onButtonClick}
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Download Resume
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
