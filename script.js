document.title = "CyberSafeNepal";

document.querySelector("#course_main").addEventListener("click", function () {
  document.querySelector(".main-content").innerHTML = "";
  document.querySelector(".main-content").insertAdjacentHTML(
    "afterbegin",
    `<div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:px-4 @[480px]:py-3">
                <div
                  class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#101a23] @[480px]:rounded-xl min-h-80"
                  style='background-image: url("images/Cyber-Security-Risk-Management-Feature.png");'
                ></div>
              </div>
            </div>
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-white tracking-light text-[32px] font-bold leading-tight">Cybersecurity 101</p>
                <p class="text-[#90b0cb] text-sm font-normal leading-normal">Master the basics of cybersecurity in this comprehensive course</p>
              </div>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2094f3] text-white text-sm font-medium leading-normal"
              >
                <span class="truncate">Enroll now</span>
              </button>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What you'll learn</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#314f68] bg-[#182834] p-4 flex-col">
                <div class="text-white" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">Basic concepts of cybersecurity</h2>
                  <p class="text-[#90b0cb] text-sm font-normal leading-normal">Week 1: Introduction to Cybersecurity</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#314f68] bg-[#182834] p-4 flex-col">
                <div class="text-white" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">Common threats and how to protect against them</h2>
                  <p class="text-[#90b0cb] text-sm font-normal leading-normal">Week 2: Cyber Threats and Vulnerabilities</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#314f68] bg-[#182834] p-4 flex-col">
                <div class="text-white" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">The role of encryption in cybersecurity</h2>
                  <p class="text-[#90b0cb] text-sm font-normal leading-normal">Week 3: Encryption and Cryptography</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#314f68] bg-[#182834] p-4 flex-col">
                <div class="text-white" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">How to secure your devices and networks</h2>
                  <p class="text-[#90b0cb] text-sm font-normal leading-normal">Week 4: Securing Devices and Networks</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#314f68] bg-[#182834] p-4 flex-col">
                <div class="text-white" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">Best practices for password security</h2>
                  <p class="text-[#90b0cb] text-sm font-normal leading-normal">Week 5: Password Security</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#314f68] bg-[#182834] p-4 flex-col">
                <div class="text-white" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">How to recognize and respond to cyber attacks</h2>
                  <p class="text-[#90b0cb] text-sm font-normal leading-normal">Week 6: Incident Response and Recovery</p>
                </div>
              </div>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet your instructor</h2>
            <div class="flex p-4 @container">
              <div class="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div class="flex gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style='background-image: url("images/expert.jpg");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Sudip Shah</p>
                    <p class="text-[#90b0cb] text-base font-normal leading-normal">Cybersecurity Expert</p>
                    <p class="text-[#90b0cb] text-base font-normal leading-normal">4.8 * (1000) reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Reviews</h2>
            <div class="flex flex-wrap gap-x-8 gap-y-6 p-4">
              <div class="flex flex-col gap-2">
                <p class="text-white text-4xl font-black leading-tight tracking-[-0.033em]">4.5</p>
                <div class="flex gap-0.5">
                  <div class="text-[#2094f3]" data-icon="Star" data-size="18px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="18px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="18px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="18px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="18px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="text-white text-base font-normal leading-normal">300 reviews</p>
              </div>
              <div class="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                <p class="text-white text-sm font-normal leading-normal">5</p>
                <div class="flex h-2 flex-1 overflow-hidden rounded-full bg-[#314f68]"><div class="rounded-full bg-[#2094f3]" style="width: 62%;"></div></div>
                <p class="text-[#90b0cb] text-sm font-normal leading-normal text-right">62%</p>
                <p class="text-white text-sm font-normal leading-normal">4</p>
                <div class="flex h-2 flex-1 overflow-hidden rounded-full bg-[#314f68]"><div class="rounded-full bg-[#2094f3]" style="width: 20%;"></div></div>
                <p class="text-[#90b0cb] text-sm font-normal leading-normal text-right">20%</p>
                <p class="text-white text-sm font-normal leading-normal">3</p>
                <div class="flex h-2 flex-1 overflow-hidden rounded-full bg-[#314f68]"><div class="rounded-full bg-[#2094f3]" style="width: 10%;"></div></div>
                <p class="text-[#90b0cb] text-sm font-normal leading-normal text-right">10%</p>
                <p class="text-white text-sm font-normal leading-normal">2</p>
                <div class="flex h-2 flex-1 overflow-hidden rounded-full bg-[#314f68]"><div class="rounded-full bg-[#2094f3]" style="width: 3%;"></div></div>
                <p class="text-[#90b0cb] text-sm font-normal leading-normal text-right">3%</p>
                <p class="text-white text-sm font-normal leading-normal">1</p>
                <div class="flex h-2 flex-1 overflow-hidden rounded-full bg-[#314f68]"><div class="rounded-full bg-[#2094f3]" style="width: 5%;"></div></div>
                <p class="text-[#90b0cb] text-sm font-normal leading-normal text-right">5%</p>
              </div>
            </div>
            <div class="flex flex-col gap-8 overflow-x-hidden bg-[#101a23] p-4">
              <div class="flex flex-col gap-3 bg-[#101a23]">
                <div class="flex items-center gap-3">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style='background-image: url("images/bb.jpg");'
                  ></div>
                  <div class="flex-1">
                    <p class="text-white text-base font-medium leading-normal">Ram Sharma</p>
                    <p class="text-[#90b0cb] text-sm font-normal leading-normal">Oct 1, 2023</p>
                  </div>
                </div>
                <div class="flex gap-0.5">
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="text-white text-base font-normal leading-normal">
                  Ramro cha! It was very informative and easy to follow. The instructor did a good job of explaining complex topics in a way that was easy to
                  understand. I highly recommend this course to anyone who wants to learn about cybersecurity.
                </p>
                <div class="flex gap-9 text-[#90b0cb]">
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">20</p>
                  </button>
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">5</p>
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-3 bg-[#101a23]">
                <div class="flex items-center gap-3">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style='background-image: url("images/sanskriti.jfif");'
                  ></div>
                  <div class="flex-1">
                    <p class="text-white text-base font-medium leading-normal">Sanskriti Bishwokarma</p>
                    <p class="text-[#90b0cb] text-sm font-normal leading-normal">Oct 1, 2023</p>
                  </div>
                </div>
                <div class="flex gap-0.5">
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="text-white text-base font-normal leading-normal">
                  I really enjoyed this course. The instructor was very knowledgeable and did a great job of explaining the material. The course was well-organized and covered a
                  wide range of topics. I learned a lot and feel more confident in my understanding of cybersecurity.
                </p>
                <div class="flex gap-9 text-[#90b0cb]">
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">15</p>
                  </button>
                  <button class="flex items-center gap-2">
                    <div class="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-inherit">2</p>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#223749] text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Give Feedback</span>
              </button>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-transparent text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Ask a Question</span>
              </button>
            </div>
          </div>
          </div>`
  );
});

document.querySelector(".btn-signup").addEventListener("click", function () {
  console.log();
  document.querySelector(".main-content").innerHTML = "";
  document.querySelector(".main-content").insertAdjacentHTML(
    "afterbegin",
    `   <div class="px-40 flex flex-1 justify-center py-5">
          <div
            class="ring-2 ring-blue-500 layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1"
          >
            <h3
              class="text-white tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5"
            >
              Create your account
            </h3>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-white text-base font-medium leading-normal pb-2">
                  Full Name
                </p>
                <input
                  placeholder="Full Name"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223749] focus:border-none h-14 placeholder:text-[#90b0cb] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-white text-base font-medium leading-normal pb-2">
                  Email
                </p>
                <input
                  placeholder="Email"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223749] focus:border-none h-14 placeholder:text-[#90b0cb] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-white text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <input
                  placeholder="Password"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223749] focus:border-none h-14 placeholder:text-[#90b0cb] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-white text-base font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <input
                  placeholder="Confirm Password"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223749] focus:border-none h-14 placeholder:text-[#90b0cb] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex px-4 py-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#3595e3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Sign up</span>
              </button>
            </div>
            <p
              class="text-[#90b0cb] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center"
            >
              Or sign up with
            </p>
            <div class="flex justify-center">
              <div
                class="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center"
              >
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#223749] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
                >
                  <span class="truncate">Google</span>
                </button>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#223749] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
                >
                  <span class="truncate">GitHub</span>
                </button>
              </div>
            </div>
            <p
              class="text-[#9eacb7] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
            >
              Already have an account?
            </p>
          </div>
        </div>`
  );
});

document.querySelector(".btn-login").addEventListener("click", function () {
  document.querySelector(".main-content").innerHTML = "";
  document.querySelector(".main-content").insertAdjacentHTML(
    "afterbegin",
    ` <div class="px-40 flex flex-1 justify-center py-5">
      <div
        class="ring-2 ring-blue-500 shadow shadow-blue-100 layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1 main-content-login"
      >
        <h1
          class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5"
        >
          Log in to Cybersecurity Academy
        </h1>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Email or username"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223749] focus:border-none h-14 placeholder:text-[#90b0cb] p-4 text-base font-normal leading-normal"
              value=""
            />
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <div class="flex w-full flex-1 items-stretch rounded-xl">
              <input
                placeholder="Password"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223749] focus:border-none h-14 placeholder:text-[#90b0cb] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                value=""
              />
              <div
                class="text-[#90b0cb] flex border-none bg-[#223749] items-center justify-center pr-4 rounded-r-xl border-l-0"
                data-icon="Eye"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
        <div class="px-4">
          <label class="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              class="h-5 w-5 rounded border-[#314f68] border-2 bg-transparent text-[#2094f3] checked:bg-[#2094f3] checked:border-[#2094f3] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#314f68] focus:outline-none"
            />
            <p class="text-white text-base font-normal leading-normal">
              Remember me
            </p>
          </label>
        </div>
        <div class="flex px-4 py-3">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            id="btn-submit-login"
          >
            <span class="truncate">Log in</span>
          </button>
        </div>
        <p
          class="text-[#90b0cb] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center"
        >
          or
        </p>
        <div class="flex justify-stretch">
          <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#223749] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Continue with Google</span>
            </button>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#223749] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Continue with GitHub</span>
            </button>
          </div>
        </div>
        <p
          class="text-[#90b0cb] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
        >
          Forgot your password?
        </p>
        <p
          class="text-[#90b0cb] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
        >
          New to Cybersecurity Academy? Sign up here
        </p>
      </div>
    </div>`
  );
});
