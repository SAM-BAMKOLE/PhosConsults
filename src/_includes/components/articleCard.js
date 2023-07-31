const { html } = require("common-tags");

const ArticleCard = ({ item }) => {
    return html`
        <a href="/articles/${item.fields.slug}">
            <div
                class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-7 my-4 rounded-sm mx-auto bg-white">
                <img
                    src="${item.fields.featuredImage.fields.file.url}"
                    alt="${item.fields.featuredImage.fields.description}"
                    class="aspect-video object-cover overflow-hidden rounded" />
                <div class="px-0 lg:px-2">
                    <div class="flex gap-5 items-center">
                        ${item.fields.tags.length > 1
                            ? item.fields.tags.map((body, index) => {
                                  index !== 0 && index < 3
                                      ? `
                                    <span class="bg-phosBlue text-[13px] text-white font-normal p-2 rounded-sm">
                                        ${body}
                                    </span>`
                                      : "";
                              })
                            : `
                            <span class="bg-phosBlue text-[13px] text-white font-normal p-2 rounded-sm">
                                ${item.fields.tags[0]}
                            </span>`}
                    </div>
                    <h2 class="font-bold text-pbase lg:text-base tracking-tight capitalize  mt-2">
                        {{ item.fields.title }}
                    </h2>
                    <div class="flex justify-between items-center mt-2">
                        <h6 class="flex items-center gap-3 text-pbase">
                            <img
                                src="{{ item.fields.author.fields.avatar.fields.file.url }}"
                                alt="author's pic"
                                class="aspect-square w-8 rounded-full object-cover" />
                            {{ item.fields.author.fields.name }}
                        </h6>
                        <h6 class="text-[14px]">{{ item.fields.publishedDate | formatDate }}</h6>
                    </div>
                    <p class="mt-2 lg:mt-4 text-pbase px-0 lg:px-3">
                        {{ item.fields.subtitle | truncateText(150) }}
                    </p>
                </div>
            </div>
        </a>
    `;
};

module.exports = ArticleCard;
