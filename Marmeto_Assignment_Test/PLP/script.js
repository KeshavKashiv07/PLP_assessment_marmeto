
const Api_url = "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093";
async function getData() {
    await fetch(Api_url)
        .then(response => {
            return response.json();
        }).then((items) => {
            const Card = document.getElementById("card_container");
            items.data.forEach(element => {
                const card_container = document.getElementById("card_container");

        
                const card = document.createElement("div");
                card.classList.add("card", "border", "border-1", "border-secondary");
                card.style.display = "grid";
                card.style.gridTemplateColumns = "1fr 5fr";
                card.style.padding = "10px";
                card.style.margin = "10px";

                const img_badge = document.createElement("div");
                img_badge.classList.add("img_badge");

                const title_variant = document.createElement("div");
                title_variant.classList.add("title_variant");
                title_variant.style.marginLeft = "15px";


 
                const img = document.createElement("img");
                img.classList.add("img-fluid");
                img.src = `${element.product_image}`;
                img.style.width = "150px";
                img.style.borderRadius = "5px";

                const badge = document.createElement("p");
                badge.classList.add("badge_tag");
                badge.textContent = `${element.product_badge}`;
                badge.style.padding = "5px 10px 5px 10px";
                badge.style.borderTopLeftRadius = "0px";
                badge.style.borderBottomLeftRadius = "10px";
                badge.style.borderBottomRightRadius = "10px";
                badge.style.borderTopRightRadius = "10px";
                badge.style.backgroundColor = "#CCFF78";
                badge.style.width = "80px";
                badge.style.textAlign = "center";
                badge.style.position = "relative";
                badge.style.bottom = "150px"


                const title = document.createElement("h1");
                title.textContent = `${element.product_title}`;
                title.classList.add("title", "fs-2")
                title.style.marginTop = "0";
                title.style.textTransform = "uppercase";

                const variantsList = document.createElement("p");
                variantsList.classList.add("variant-list", "text-secondary");
                variantsList.style.paddingLeft = "10px";
                variantsList.style.fontSize = "1.5rem";

                element.product_variants.forEach(variant => {
                    for (const index in variant) {
                        const variantItem = document.createElement("h6");
                        variantItem.textContent = `${variant[index].toUpperCase()}`;
                        variantsList.appendChild(variantItem);
                    }
                });

                img_badge.appendChild(img);
                img_badge.appendChild(badge);

                title_variant.appendChild(title);
                title_variant.appendChild(variantsList);

                card.appendChild(img_badge);
                card.appendChild(title_variant);

                card_container.appendChild(card);
            });

        });
}
getData();

const getSearchValue = document.getElementById("searchInput");
getSearchValue.addEventListener("input", searchText)

function searchText() {
    const variantItems = document.querySelectorAll(".variant-list h6");
    const searchValue = getSearchValue.value.toLowerCase();

    variantItems.forEach(variantItem => {
        const text = variantItem.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            variantItem.style.backgroundColor = "rgb(204,255,120)";
            variantItem.style.padding = "4px";
            variantItem.style.width = "fit-content";
            variantItem.style.borderRadius = "5px";
        }
        else {
            variantItem.style.backgroundColor = "white"
        }
    });
}

function onGridView() {
    const getGridBtn = document.getElementById("grid_view_btn");
    getGridBtn.addEventListener("click", () => {
        card_container.style.display = "grid";
        card_container.style.gridTemplateColumns = "1fr 1fr";
    });
}

function onListView() {
    const getGridBtn = document.getElementById("list_view_btn");
    getGridBtn.addEventListener("click", () => {
        card_container.style.display = "grid";
        card_container.style.gridTemplateColumns = "1fr";
    });
}
