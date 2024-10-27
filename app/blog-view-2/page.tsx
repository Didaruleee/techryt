import Newsletter from "@/components/Newsletter";
import ReachYourIdeal from "@/components/ReachYourIdeal";

export default function pages() {
  const author = {
    name: "Sofie Koevoets",
    role: "Content Marketing Manager",
  };
  const publishDate = "Jan 31,2023";

  return (
    <>
      <div className="flex overflow-hidden flex-col bg-white">
        <div className="flex flex-col justify-center md:py-px w-full max-md:max-w-full">
          <div className="flex relative flex-col  md:pt-3.5 w-full bg-blend-luminosity  max-md:max-w-full">
            <section
              style={{
                backgroundImage: "url('/images/Blog/BG Frame.png')",
              }}
              className="flex bg-center bg-contain text-white relative z-10 flex-col items-center justify-end md:pt-8 mb-0 w-full  lg:min-h-screen max-md:px-5 max-md:mb-2.5 max-md:max-w-full"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f56c01728f8ee8307a67e9327f93987ed7c9e8e4a9b17bc01cd6c48c0e0829dc?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                alt=""
                className="w-full h-[1010px] top-40 object-cover absolute  z-0"
              />
              <div className="flex relative flex-col pt-36 md:pt-0 mb-0 w-full max-w-full max-md:mb-2.5 max-md:max-w-full z-10">
                <div className="flex text-center w-full">
                  <div className="flex flex-col justify-center items-center my-auto pb-32 lg:pb-52 w-full">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-md:max-w-full max-md:text-4xl">
                      Streamline your work processes.
                    </h1>
                    <p className="self-center mt-7 text-xl font-medium leading-7 md:w-1/2 max-md:max-w-md">
                      Evaluate the newest digital trends. Utilize the most
                      recent technology while developing plans. Manage your
                      projects flawlessly using the necessary data and suitable
                      team.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <>
              <main className="flex flex-col self-center md:my-10 w-full max-w-[1548px]  max-md:max-w-full">
                <h2 className="text-3xl lg:text-6xl px-10 lg:px-28 py-5 font-extrabold tracking-tight text-zinc-800 w-full max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Branding Brilliance: Your <br /> Guide to Great Branding
                </h2>

                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a01fd5581877613daca7ddd1b326592d48bef668474d85db52a106265e0479d8?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                  alt="Main content illustration"
                  className="object-contain self-center w-full aspect-[2.81] max-w-full px-5 lg:px-16 max-md:max-w-full"
                />
                <div className="w-full flex flex-col">
                  <div className="flex flex-wrap gap-10 mt-14 lg:ml-14 max-w-full text-xl leading-relaxed w-full px-5 md:px-0 lg:w-[566px] max-md:mt-10">
                    <div className="flex flex-auto gap-6 self-start">
                      <div
                        className="flex shrink-0 rounded-full bg-zinc-300 h-14 w-14 lg:h-[84px] lg:w-[84px]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                        <div className="self-start font-bold text-zinc-800">
                          {author.name}
                        </div>
                        <div className="font-semibold text-neutral-500">
                          {author.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-7 w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8450c0040af2d8ea65ac3697d9c9ae95782cc5989dfb1ca5a14e9ed04f2bab6?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                        alt=""
                        className="object-contain shrink-0 w-px aspect-[0.01]"
                      />
                      <div className="flex flex-col my-auto">
                        <div className="self-start font-bold text-zinc-800">
                          Published
                        </div>
                        <time className="font-semibold text-neutral-500">
                          {publishDate}
                        </time>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex md:flex-row flex-col px-5 lg:px-20">
                    <aside className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-start w-full max-md:mt-10">
                        <div className="text-xl font-bold leading-loose text-zinc-800">
                          14 min read
                        </div>
                        <div className="flex flex-col items-start self-stretch mt-6 bg-neutral-100 rounded-[30px] max-md:pr-5">
                          <div className="flex shrink-0 bg-cyan-500 h-[15px] rounded-[30px] w-[151px]" />
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bcc5f63d315122e7f749d4540c283cb8757ff24249fb54d5a13826ee9774836?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                          alt=""
                          className="object-contain self-stretch mt-7 w-full aspect-[250]"
                        />
                        <h3 className="mt-4 text-xl font-bold leading-loose text-zinc-800">
                          SHARE THE ARTICLE
                        </h3>
                        <div className="flex gap-1.5 mt-6">
                          {["Facebook", "Twitter", "LinkedIn", "Email"].map(
                            (platform, index) => (
                              <a
                                key={index}
                                href={`#share-${platform.toLowerCase()}`}
                                className="flex shrink-0 bg-cyan-500 rounded-xl h-[39px] w-[39px]"
                                aria-label={`Share on ${platform}`}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </aside>
                    <article className="flex flex-col md:ml-5 w-full px-1 md:w-4/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start mt-5 text-xl text-zinc-800 max-md:mt-10 max-md:max-w-full">
                        <p className="self-stretch leading-7 max-md:max-w-full">
                          <span className="font-medium">
                            Great branding doesnt happen overnight. Success
                            doesnt come when companies decide to just do it on a
                            whim and boil their entire essence down to three
                            words. Instead,{" "}
                          </span>
                          <a
                            href="https://www.superside.com/branding-services"
                            className="font-medium underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            strong branding
                          </a>
                          <span className="font-medium">
                            {" "}
                            comes from having an excellent understanding of your
                            target audience, knowing what features make your
                            brand stand out from your competitors and being able
                            to make the latter extremely appealing to the
                            former.
                          </span>
                        </p>
                        <p className="self-stretch leading-7 max-md:max-w-full mt-4">
                          <span className="font-medium">
                            Branding, as a term, is broad and loosely defined.
                            It is made up of a number of more specific focuses,
                            such as brand identity, logo designs and brand
                            colors, and brand awareness and recall.
                          </span>
                        </p>
                        <p className="self-stretch leading-7 max-md:max-w-full mt-4">
                          <span className="font-medium">
                            In this guide, we cover branding in detail with a
                            wealth of curated information available through
                            hyperlinks and videos. From the big picture right
                            through to the various different components that
                            make up branding, this guide serves as the perfect
                            reference for any company looking to break into the
                            market, reposition or rebrand.
                          </span>
                        </p>
                        <h2 className="md:mt-24 mt-12 text-4xl md:text-5xl font-extrabold tracking-tight max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                          Well be discussing:
                        </h2>
                        <nav className="mt-5 md:mt-12 leading-7 text-cyan-500 w-full md:w-[449px] max-md:mt-10 max-md:max-w-full">
                          <a
                            href="https://www.superside.com/blog/branding-guide#the-3-ways"
                            className="font-bold text-cyan-500 underline block"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            The 3 Ways You Can Design a Brilliant Brand
                          </a>
                          <a
                            href="https://www.superside.com/blog/branding-guide#branding-broken-down"
                            className="font-bold text-cyan-500 underline block mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Branding Broken Down (With Guidelines)
                          </a>
                          <a
                            href="https://www.superside.com/blog/branding-guide#bring-the-best"
                            className="font-bold text-cyan-500 underline block mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Bring the Best Out of Your Branding
                          </a>
                        </nav>
                      </div>
                    </article>
                  </div>
                </div>

                <section className="self-center md:mt-12 md:ml-4 px-1 w-full max-w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col justify-start">
                    <div className="flex flex-col w-full ml-5 md:w-1/4 max-md:ml-0 max-md:w-full"></div>
                    <article className="flex flex-col  ml-16 w-4/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col  items-start mt-5 text-xl text-zinc-800 max-md:mt-10 max-md:max-w-full">
                        <h2 className="self-start md:mt-14 lg:mr-10 text-5xl font-extrabold tracking-tight text-zinc-800 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                          The 3 Ways You Can Design a Brilliant Brand
                        </h2>
                        <p className="self-start md:mt-12 px-1 md:mr-8 md:text-xl font-semibold leading-7 text-zinc-800 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                          Ensuring that all of your branding material is
                          consistent and correct for each individual channel
                          requires some knowhow. There are three main ways
                          companies go about doing this: in-house, through an
                          agency, or by outsourcing the requirements.
                        </p>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40ad97b256373111a861ab9e024bed7412c7a83bc3c06279a6d3226c6a28e413?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                          alt="Branding design illustration"
                          className="object-contain self-end mt-11 mr-12 max-w-full aspect-[1.96] w-[1071px] max-md:mt-10 max-md:mr-2.5"
                        />
                        <h3 className="self-center lg:self-start  mt-16 text-5xl font-extrabold tracking-tight text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                          In-house branding
                        </h3>
                        <p className="self-center lg:self-start mt-9 md:mr-24 md:text-xl leading-7 text-zinc-800 w- max-md:mr-2.5 max-md:max-w-full">
                          In-house branding can be effective, but only if the
                          team has the insights and knowledge necessary to
                          deliver. While many C-Suite executives have an
                          excellent understanding of their product, not all have
                          a deep understanding of their brand.
                        </p>
                        <div className="self-center lg:self-start mt-2 md:text-xl font-bold leading-10 text-cyan-500 max-md:max-w-full">
                          Pros: In-house teams are affordable, adaptable and
                          agile <br />
                          Cons: There may be a general lack of branding
                          experience
                        </div>
                        <h3 className="self-center lg:self-start mt-16 text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                          Agency branding
                        </h3>
                        <p className="self-center lg:self-start mt-9 md:mr-24 md:text-xl leading-7 text-zinc-800 w-full  max-md:max-w-full">
                          High-quality branding is what agencies do. They have
                          experience and case studies to draw upon and have
                          exposure to market trends and competitor positioning.
                          Agencies usually provide short-term branding and
                          campaigning, though companies can use agencies for all
                          of their advertising requirements.
                        </p>
                        <div className="self-center  lg:self-start mt-11 text-xl font-bold leading-10 text-cyan-500 max-md:mt-10 max-md:max-w-full">
                          Pros: In-depth branding experience and knowledge{" "}
                          <br />
                          Cons: Working with agencies might mean a BIG spend
                        </div>
                      </div>
                    </article>
                  </div>
                </section>
              </main>
            </>
            <div className="flex justify-center items-center w-full px-5 md:px-0">
              <Newsletter />
            </div>
            <div className="mt-10 md:mt-20">
              <ReachYourIdeal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
