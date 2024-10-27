import ReachYourIdeal from "@/components/ReachYourIdeal";

export default function page() {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const hours = ["4 Hours/Day", "8 Hours/day", "12 Hours/day", "12 Hours/day"];

  const languages = ["English", "Spanish", "Bilingual"];
  return (
    <>
      <div className="flex overflow-hidden flex-col  items-center py-10 px-5 md:px-10 bg-white">
        <h1 className="pt-20 md:pt-0 md:mt-32 text-6xl font-extrabold tracking-tight text-center text-zinc-800 w-full max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Let us know how we can help you <br /> by filling out the form below
        </h1>
        <main className="py-2 md:pl-20 mt-16  max-w-full rounded-3xl bg-[#F6F6F6] w-full max-md:pl-5 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col md:w-[65%] pt-7 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch w-full text-xl font-semibold leading-snug text-zinc-800 max-md:mt-10 max-md:max-w-full">
                <label
                  htmlFor="teamSize"
                  className="text-3xl leading-none text-black"
                >
                  Team Size Required
                </label>
                <div className="flex gap-3 md:gap-5 justify-between py-5 px-4 md:pr-3.5 md:pl-7 mt-5 max-w-full bg-white rounded-xl border border-solid border-cyan-700 border-opacity-40 w-[90%] md:w-[475px]  max-md:pl-5">
                  <select
                    id="teamSize"
                    className="w-[90%] md:w-full bg-transparent appearance-none outline-none"
                  >
                    <option>Select Team Size</option>
                    <option>Select Team Size 1</option>
                  </select>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2557f3fca54ecdfb6764b7efe7af31ed61edb00ec0705cf2a749fdb5799bda16?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                    alt=""
                    className="object-contain shrink-0 self-start mt-3 w-5 aspect-[1.54]"
                  />
                </div>
              </div>
              <div className="mt-7 text-xl font-semibold leading-snug text-zinc-800">
                <h3 className="text-3xl leading-none text-black">
                  Schedule Required
                </h3>
                <div className="flex gap-10 mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64905f0e9704f162b421af6622557aacb7618230365d22a54f835dbac6dc10c5?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                    alt=""
                    className="object-contain shrink-0 my-auto w-6 aspect-square"
                  />
                  <span className="flex-auto text-sm md:text-base">
                    Select Days ( Choose All applicable):
                  </span>
                </div>
                <div className="flex flex-wrap gap-5 justify-start md:justify-between mt-6 max-w-full font-bold whitespace-nowrap w-full md:w-[811px]">
                  {days.map((day) => (
                    <button
                      key={day}
                      className="px-6 py-5 bg-white rounded-xl border border-solid border-cyan-700 border-opacity-40 max-md:px-5"
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <div className="flex gap-6 mt-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bd0a752ecdfb06c9622b21309cc7a3300572a69250588b90eb4113221a149d9?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                    alt=""
                    className="object-contain shrink-0 my-auto w-6 aspect-square"
                  />
                  <span className="basis-auto">Select Hours From - to:</span>
                </div>
                <div className="flex flex-wrap gap-4 self-stretch mt-5 font-bold max-md:max-w-full">
                  {hours.map((hour) => (
                    <button
                      key={hour}
                      className="px-7 py-5 bg-white rounded-xl border border-solid border-cyan-700 border-opacity-40 max-md:px-5"
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-9 text-xl font-semibold leading-snug text-zinc-800">
                <h3 className="text-3xl leading-none text-black">Language</h3>
                <div className="flex flex-row md:flex-wrap px-2 md:px-0 md:gap-5 justify-between mt-6 max-w-full md:font-bold whitespace-nowrap w-full md:w-[541px]">
                  {languages.map((language) => (
                    <button
                      key={language}
                      className="md:px-9 py-2 text-sm md:text-base md:py-5 bg-white rounded-xl border border-solid border-cyan-700 border-opacity-40 max-md:px-5"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:ml-5 w-full md:w-[35%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-24 mx-auto w-full font-bold bg-[#04A6C8] rounded-3xl max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col justify-center items-center px-16 py-20 text-3xl text-white bg-[#004655] rounded-3xl max-md:px-5 max-md:max-w-full">
                  <h3 className="leading-none">Cost Estimate</h3>
                  <div className="mt-4 text-7xl font-extrabold tracking-tight max-md:text-4xl">
                    $0
                  </div>
                  <p className="text-center md:self-stretch mt-5 leading-none">
                    Hourly Rate per Person
                  </p>
                </div>
                <button className="self-center px-6 py-7 mt-44 max-w-full text-xl leading-tight text-center text-cyan-500 whitespace-nowrap bg-white rounded min-h-[80px] w-[184px] max-md:px-5 max-md:mt-10">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ReachYourIdeal />
    </>
  );
}
