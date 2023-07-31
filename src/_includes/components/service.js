const { html } = require("common-tags");

const Card = ({ href, description, icon, title }) => {
    return html`
        <a
            href="/service/${href}"
            class="flex py-4 px-5 bg-white rounded-sm group hover:bg-gray-800 transition-all duration-300"
            data-aos="fade-up">
            <div class="w-10 flex justify-center">
                <i
                    class="bx ${icon} mr-3 mt-3 text-phosBlue text-3xl group-hover:text-phosOrange transition-all"></i>
            </div>
            <div class="">
                <h3
                    class="text-pbase md:text-base font-medium text-gray-950 group-hover:text-white transition-all">
                    ${title}
                </h3>
                <p
                    class="text-sm md:text-pbase text-gray-500 group-hover:text-gray-300 transition-all">
                    ${description}
                </p>
            </div>
        </a>
    `;
};

module.exports = Card;
