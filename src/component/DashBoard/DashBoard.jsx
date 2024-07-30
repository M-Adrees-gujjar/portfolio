import MyComponent from './Type';
import "./DashBoard.css"

export default function DashBoard() {
  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/1_DLicZsrPBVKypA_kkQcbm9czBrbUygI/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Adrees-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-bg-One text-text-Two pt-16" id="about">
      <div className="relative isolate px-6 lg:px-8" id="dashboard">
        <div className="mx-auto max-w-6xl py-12 lg:py-24 grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="text-center lg:text-left">
            <MyComponent />
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-4">
              Muhammad Adrees
            </h1>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <button onClick={onButtonClick} className="rounded-md text-white bg-text-Three px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-text-Two focus:outline-none focus:ring-2 focus:text-bg-Two focus:ring-offset-2">
                Download Resume
              </button>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="mt-6 text-lg leading-8 text-justify">
              Aspiring web developer, studying Computer Science, eager for an internship. Skilled in HTML, CSS,
              JavaScript, and keen on learning React for better websites. Interested in backend tools like Node.js, Express,
              and databases. Knows Git and GitHub for managing code. Enthusiastic about full stack development and
              always ready to learn. Good communicator, passionate about creating awesome web projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
