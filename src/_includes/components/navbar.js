const { html } = require("common-tags");

const Navbar = ({ item }) => {
    return html`
        <div class="mr-20">
            <span class="">
                <img
                    src="${"/assets/images/phos-logo-open.png"}"
                    alt="Phos consults logo"
                    class="w-[200px] lg:w-[250px]" />
            </span>
        </div>
        <div
            class="flex flex-col lg:flex-row items-center justify-between w-full absolute top-[75px] -left-[100%] bg-gray-800 lg:relative lg:left-auto lg:top-auto lg:bg-transparent transition-all duration-300 ease-in"
            id="navbar-links">
            <ul
                class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-7 w-full lg:w-full">
                <li class="w-full lg:w-auto text-center">
                    <a
                        href="/"
                        class="nav-links nav-active w-full text-center py-2 lg:py-0 block md:inline-block"
                        id="index"
                        >Home</a
                    >
                </li>
                <li class="w-full lg:w-auto text-center">
                    <a
                        href="/about/"
                        class="nav-links w-full text-center py-2 lg:py-0 block md:inline-block"
                        id="about"
                        >About</a
                    >
                </li>
                <li class="w-full lg:w-auto text-center">
                    <a
                        href="/service/"
                        class="nav-links w-full text-center py-2 lg:py-0 block md:inline-block"
                        id="service"
                        >Services</a
                    >
                </li>
                <li class="w-full lg:w-auto text-center">
                    <a
                        href="/articles/"
                        class="nav-links w-full text-center py-2 lg:py-0 block md:inline-block"
                        id="articles"
                        >Articles</a
                    >
                </li>
                <li class="w-full lg:w-auto text-center">
                    <a
                        href="/contact/"
                        class="nav-links w-full text-center py-2 lg:py-0 block md:inline-block"
                        id="contact"
                        >Contact</a
                    >
                </li>
                <li class="w-full lg:w-auto text-center">
                    <a
                        href="/pricing/"
                        class="nav-links w-full text-center py-2 lg:py-0 block md:inline-block"
                        id="pricing"
                        >Pricing</a
                    >
                </li>
            </ul>
            <div class="flex flex-col lg:flex-row lg:space-x-10 w-full lg:justify-end">
                <span class="">
                    <a
                        href="mailto:info@phosconsults.com"
                        class="text-amber-300 font-medium text-pbase w-full text-center py-2 md:py-0 block md:inline-block"
                        >info@phosconsults.com</a
                    >
                </span>
                <div class="flex gap-3 items-center justify-center lg:justify-end py-4 lg:py-0">
                    <span>
                        <a
                            href="https://www.linkedin.com/company/tosingodwin-consulting/"
                            class="topbar-links"
                            target="_blank">
                            <i class="bx bxl-linkedin"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://www.instagram.com/phosconsults/"
                            class="topbar-links"
                            target="_blank">
                            <i class="bx bxl-instagram"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://call.whatsapp.com/video/Ju4WJrRkhNIH4zkTWOTyUr"
                            class="topbar-links"
                            target="_blank">
                            <i class="bx bxl-whatsapp"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://twitter.com/phosconsults"
                            class="topbar-links"
                            target="_blank">
                            <i class="bx bxl-twitter"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <div class="space-y-[3.5px] transition block lg:hidden cursor-pointer" id="menu">
            <div class="w-[15px] h-[2.5px] bg-gray-50 rounded-md block"></div>
            <div class="w-[20px] h-[2.5px] bg-gray-50 rounded-md block"></div>
            <div class="w-[25px] h-[2.5px] bg-gray-50 rounded-md block"></div>
        </div>
    `;
};

module.exports = Navbar;
