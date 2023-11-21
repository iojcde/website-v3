"use client";

import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { JavascriptOriginalIcon, TypescriptOriginalIcon } from "react-devicons";
import { useMedia } from "react-use";
import { Parallax } from "@/components/parallax";

const Stack = () => {
  useEffect(() => {
    const appear = gsap.to("#stack .stack-block", {
      autoAlpha: 1,
      stagger: 0.03,
      scrollTrigger: {
        trigger: "#stack",
        start: "top center",
      },
    });
    return () => {
      appear.kill();
    };
  }, []);

  const isWide = useMedia("(min-width: 640px)", true);
  if (isWide) {
    return (
      <div id="stack" className="container relative px-6 pb-16 sm:px-0 mt-32">
        <div className="relative z-20 mx-auto max-w-screen-xl rounded-xl border bg-background pb-0 sm:border-0 sm:bg-transparent">
          <h1 className="appear font-display text-4xl font-medium lg:text-6xl">
            Stack
          </h1>
          <p className="mt-2 appear">Languages ‧ Frameworks ‧ Tools I use</p>
        </div>
        <div className="stack-items absolute inset-y-0 grid grid-cols-2 gap-6 sm:static sm:mx-[-20rem] sm:grid-cols-6">
          {/* <div className="absolute inset-0 opacity-80 bg-grid  z-0"></div> */}

          <div className="absolute inset-y-0 -inset-x-16 bg-grid [mask-image:radial-gradient(white,white,transparent)]  [mask-position:top] z-0 "></div>

          <Parallax speed={-0.3} className="space-y-6">
            <Block appear>
              <div>
                <Image
                  alt=""
                  width={64}
                  height={64}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                />
              </div>
            </Block>

            <Block>
              <div>
                <svg viewBox="0 0 128 128" height={100}>
                  <path
                    fill="currentColor"
                    d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zm13.332-9.04c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997V56.785c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929H92.563v-.001zm33.857-1.93c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011V55.7c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"
                  ></path>
                  <path
                    fill="#F34F29"
                    d="M52.7 61.7L29.951 38.952a3.355 3.355 0 00-4.744 0l-4.724 4.724 5.991 5.992a3.983 3.983 0 014.1.956 3.988 3.988 0 01.947 4.125l5.775 5.775a3.988 3.988 0 014.125 6.593 3.992 3.992 0 01-6.516-4.342l-5.386-5.386-.001 14.174a3.992 3.992 0 011.056 6.401 3.993 3.993 0 11-4.339-6.518V57.141a3.99 3.99 0 01-2.167-5.236l-5.906-5.908L2.563 61.595a3.356 3.356 0 000 4.747L25.312 89.09a3.357 3.357 0 004.746 0L52.7 66.446a3.355 3.355 0 000-4.746z"
                  ></path>
                  <path fill="none" d="M1.58 37.928h124.84v52.143H1.58z"></path>
                </svg>
              </div>
            </Block>
          </Parallax>

          <Parallax speed={-0.2} className=" mt-24 space-y-6">
            <Block>
              <div>
                <svg
                  aria-label="Next.js logotype"
                  height="32"
                  role="img"
                  viewBox="0 0 394 79"
                >
                  <path
                    d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                    fill="currentColor"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Block>

            <Block>
              <div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="-10.5 -9.45 21 18.9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:text-link-dark mb-3 mr-0 mt-4 flex w-24 origin-center self-center text-sm text-[rgb(20,158,202)] transition-all ease-in-out lg:w-28"
                >
                  <title>React</title>
                  <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
              </div>
            </Block>
          </Parallax>

          <Parallax speed={-0.1} className="mt-20 space-y-6">
            <Block>
              <div className="flex gap-8 text-4xl sm:text-7xl">
                <TypescriptOriginalIcon />
                <JavascriptOriginalIcon />
              </div>
            </Block>

            <Block>
              <div>
                <img
                  alt=""
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                  className="h-32"
                />
              </div>
            </Block>
          </Parallax>

          <Parallax speed={0.3} className=" mt-36 space-y-6">
            <Block>
              <div>
                <svg
                  viewBox="0 0 248 31"
                  className="h-5 w-auto text-slate-900 dark:text-white"
                >
                  <title>TailwindCSS Logotype</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                    fill="#38bdf8"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Block>

            <Block>
              <div className="relative h-24 w-full">
                <Image
                  alt=""
                  fill
                  src="/figma.svg"
                  className="object-contain"
                />
              </div>
            </Block>
          </Parallax>

          <Parallax speed={0.2} className="space-y-6 sm:-mt-8">
            <Block>
              <div>
                <svg
                  className="h-12"
                  fill="none"
                  viewBox="0 0 203 58"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>ESlint Logo</title>
                  <path
                    d="m46.557 21.11-12.54-7.24a1.014 1.014 0 0 0-1.015 0l-12.54 7.24a1.015 1.015 0 0 0-.508.878v14.48c0 .362.194.697.508.879l12.54 7.24c.314.181.7.181 1.015 0l12.54-7.24c.314-.181.507-.516.507-.879v-14.48c0-.363-.193-.697-.507-.879Z"
                    fill="#8080F2"
                  />
                  <path
                    d="M.904 27.705 15.888 1.638C16.432.695 17.438 0 18.526 0h29.967c1.089 0 2.094.695 2.639 1.638l14.983 26.01a3.1 3.1 0 0 1 0 3.074L51.132 56.576c-.545.942-1.55 1.424-2.639 1.424H18.526c-1.088 0-2.094-.467-2.638-1.41L.905 30.694a2.94 2.94 0 0 1 0-2.99Zm12.407 12.534c0 .384.231.738.563.93L32.96 52.18c.332.192.748.192 1.08 0l19.1-11.011c.332-.192.564-.546.564-.93V18.216c0-.383-.229-.738-.56-.93L34.057 6.277a1.084 1.084 0 0 0-1.079 0l-19.102 11.01c-.332.192-.566.547-.566.93V40.24Z"
                    fill="#4B32C3"
                  />
                  <path
                    d="M86.697 43.71V14.29h18.745v4.581h-13.66v7.733h12.483v4.582H91.783v7.943h13.869v4.581H86.697Zm32.222.589c-2.241 0-4.231-.393-5.968-1.177-1.709-.813-3.054-1.976-4.035-3.489-.98-1.513-1.471-3.362-1.471-5.547v-1.093h5.002v1.093c0 1.933.588 3.376 1.765 4.328 1.177.953 2.746 1.43 4.707 1.43 1.99 0 3.489-.407 4.497-1.22 1.009-.812 1.513-1.863 1.513-3.152 0-.868-.238-1.569-.714-2.101-.476-.56-1.177-1.009-2.102-1.345-.896-.336-1.989-.658-3.278-.967l-1.261-.252c-1.933-.448-3.614-1.008-5.043-1.68-1.401-.701-2.48-1.598-3.236-2.69-.757-1.094-1.135-2.523-1.135-4.288 0-1.765.42-3.278 1.261-4.539.84-1.26 2.031-2.227 3.572-2.9 1.541-.672 3.348-1.009 5.422-1.009 2.073 0 3.923.35 5.548 1.051 1.625.7 2.9 1.751 3.824 3.152.953 1.401 1.429 3.153 1.429 5.254v1.387h-5.001v-1.387c0-1.205-.238-2.172-.715-2.9-.476-.729-1.148-1.26-2.017-1.597-.869-.336-1.891-.504-3.068-.504-1.737 0-3.054.336-3.951 1.008-.896.673-1.345 1.625-1.345 2.858 0 .785.196 1.457.589 2.018.42.532 1.022.98 1.807 1.345.812.336 1.821.63 3.026.882l1.261.294c2.017.449 3.782 1.023 5.296 1.723 1.513.673 2.689 1.57 3.53 2.69.869 1.121 1.303 2.578 1.303 4.371 0 1.766-.462 3.32-1.387 4.666-.897 1.345-2.172 2.395-3.825 3.152-1.625.756-3.558 1.135-5.8 1.135Zm14.181-.589V14.29h5.085v24.839h13.786v4.581H133.1Zm21.727 0V22.948h4.834V43.71h-4.834Zm2.396-23.41c-.869 0-1.625-.28-2.269-.84-.617-.589-.925-1.36-.925-2.312 0-.953.308-1.71.925-2.27a3.255 3.255 0 0 1 2.269-.882c.925 0 1.681.294 2.27.882.616.56.924 1.317.924 2.27 0 .953-.308 1.723-.924 2.311-.589.56-1.345.841-2.27.841Zm7.302 23.41V22.948h4.75v2.9h.714c.364-.785 1.023-1.527 1.975-2.228.953-.7 2.396-1.05 4.329-1.05 1.598 0 3.012.364 4.245 1.092a7.435 7.435 0 0 1 2.858 3.026c.701 1.29 1.051 2.816 1.051 4.582v12.44h-4.833V31.648c0-1.681-.421-2.928-1.261-3.74-.813-.841-1.976-1.262-3.489-1.262-1.709 0-3.054.575-4.034 1.724-.981 1.12-1.471 2.732-1.471 4.833V43.71h-4.834Zm31.924 0c-1.345 0-2.424-.392-3.236-1.177-.785-.812-1.177-1.905-1.177-3.278V26.941h-5.422v-3.993h5.422v-6.683h4.833v6.683h5.968v3.993h-5.968v11.516c0 .84.393 1.26 1.177 1.26h4.161v3.993h-5.758Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Block>

            <Block>
              <div className="relative h-32  w-full">
                <Image alt="" fill className="object-contain" src="/tux.svg" />
              </div>
            </Block>
          </Parallax>
          <Parallax speed={0.5}>
            <Block>
              <div>
                <svg
                  height="144"
                  width="144"
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m71.05 23.68c-26.06 0-47.27 21.22-47.27 47.27s21.22 47.27 47.27 47.27 47.27-21.22 47.27-47.27-21.22-47.27-47.27-47.27zm-.07 4.2a3.1 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm7.12 5.12a38.27 38.27 0 0 1 26.2 18.66l-3.67 8.28c-.63 1.43.02 3.11 1.44 3.75l7.06 3.13a38.27 38.27 0 0 1 .08 6.64h-3.93c-.39 0-.55.26-.55.64v1.8c0 4.24-2.39 5.17-4.49 5.4-2 .23-4.21-.84-4.49-2.06-1.18-6.63-3.14-8.04-6.24-10.49 3.85-2.44 7.85-6.05 7.85-10.87 0-5.21-3.57-8.49-6-10.1-3.42-2.25-7.2-2.7-8.22-2.7h-40.6a38.27 38.27 0 0 1 21.41-12.08l4.79 5.02c1.08 1.13 2.87 1.18 4 .09zm-44.2 23.02a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm74.15.14a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm-68.29.5h5.42v24.44h-10.94a38.27 38.27 0 0 1 -1.24-14.61l6.7-2.98c1.43-.64 2.08-2.31 1.44-3.74zm22.62.26h12.91c.67 0 4.71.77 4.71 3.8 0 2.51-3.1 3.41-5.65 3.41h-11.98zm0 17.56h9.89c.9 0 4.83.26 6.08 5.28.39 1.54 1.26 6.56 1.85 8.17.59 1.8 2.98 5.4 5.53 5.4h16.14a38.27 38.27 0 0 1 -3.54 4.1l-6.57-1.41c-1.53-.33-3.04.65-3.37 2.18l-1.56 7.28a38.27 38.27 0 0 1 -31.91-.15l-1.56-7.28c-.33-1.53-1.83-2.51-3.36-2.18l-6.43 1.38a38.27 38.27 0 0 1 -3.32-3.92h31.27c.35 0 .59-.06.59-.39v-11.06c0-.32-.24-.39-.59-.39h-9.15zm-14.43 25.33a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm46.05.14a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11z" />
                  <path
                    d="m115.68 70.95a44.63 44.63 0 0 1 -44.63 44.63 44.63 44.63 0 0 1 -44.63-44.63 44.63 44.63 0 0 1 44.63-44.63 44.63 44.63 0 0 1 44.63 44.63zm-.84-4.31 6.96 4.31-6.96 4.31 5.98 5.59-7.66 2.87 4.78 6.65-8.09 1.32 3.4 7.46-8.19-.29 1.88 7.98-7.98-1.88.29 8.19-7.46-3.4-1.32 8.09-6.65-4.78-2.87 7.66-5.59-5.98-4.31 6.96-4.31-6.96-5.59 5.98-2.87-7.66-6.65 4.78-1.32-8.09-7.46 3.4.29-8.19-7.98 1.88 1.88-7.98-8.19.29 3.4-7.46-8.09-1.32 4.78-6.65-7.66-2.87 5.98-5.59-6.96-4.31 6.96-4.31-5.98-5.59 7.66-2.87-4.78-6.65 8.09-1.32-3.4-7.46 8.19.29-1.88-7.98 7.98 1.88-.29-8.19 7.46 3.4 1.32-8.09 6.65 4.78 2.87-7.66 5.59 5.98 4.31-6.96 4.31 6.96 5.59-5.98 2.87 7.66 6.65-4.78 1.32 8.09 7.46-3.4-.29 8.19 7.98-1.88-1.88 7.98 8.19-.29-3.4 7.46 8.09 1.32-4.78 6.65 7.66 2.87z"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </Block>
          </Parallax>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="relative z-20 mx-auto max-w-screen-xl rounded-xl mt-16 pb-0 ">
          <h1 className="font-display text-4xl font-medium lg:text-6xl">
            Stack
          </h1>
          <p className="mt-2">Languages ‧ Frameworks ‧ Tools I use</p>
        </div>
      </div>
    );
  }
};

export { Stack };

const Block = ({
  children,
  appear,
}: {
  children: ReactNode;
  appear?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`stack-block select-none invisible flex h-full w-full flex-col items-center rounded-xl bg-gray-2 border p-6 lg:p-8  `}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: { children: ReactNode }) => (
  <h1 className="font-display mb-2 text-3xl font-semibold">{children}</h1>
);

Block.Header = Header;