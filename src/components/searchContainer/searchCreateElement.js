export default function create(element,link) {
    
    // var listLink = document.createElement("a");
    // var list = document.createElement("div");
    // var listHead = document.createElement("div");
    // var listDivImg = document.createElement("div");
    // var listImg = document.createElement("img");
    // var listTitle = document.createElement("div");
    // var listTitleHead = document.createElement("p");
    // var listTitleDesc = document.createElement("p");

    // list.className = "ListItem ListItem--clickable";
    // listHead.className = "ListItem__head";
    // listDivImg.className = "ListItem__Image";
    // listTitle.className = "ListItem__Title";
    // listTitleHead.className = "ListItem__Title--headline";
    // listTitleDesc.className = "ListItem__Title--description";

    // listLink.appendChild(list);
    // list.appendChild(listHead);
    // listHead.appendChild(listDivImg);
    // listDivImg.appendChild(listImg);
    // listHead.appendChild(listTitle);
    // listTitle.appendChild(listTitleHead);
    // listTitle.appendChild(listTitleDesc);
    // link.appendChild(listLink);

    // listImg.style.backgroundSize = "40px, 40px";
    // listImg.style.backgroundImage = "URL('https://chayns.tobit.com/storage/" + element.siteId + "/Images/icon-57.png')";
    // // listImg.src = "https://chayns.tobit.com/storage/" + id + "/Images/icon-57.png";
    // listTitleHead.innerText = element.appstoreName;
    // listTitleDesc = "Test";
    // listLink.href = "https://chayns.net/" + element.siteId;
    // listLink.target = "_blank";

    let htmlText = 
        `<a href="https://chayns.net/${element.siteId}" target ="_blank">
            <div class="ListItem ListItem--clickable">
                <div class="ListItem__head">
                    <div class="ListItem__Image">
                        <img style = "background-image: URL('https://chayns.tobit.com/storage/${element.siteId}/Images/icon-57.png'); background-size: 40px, 40px;">
                        </img>
                    </div>
                    <div class="ListItem__Title">
                        <p class="ListItem__Title--headline">
                            ${element.appstoreName}
                        </p>
                        <p class = "ListItem__Title--description">

                        </p>
                    </div>
                </div>
            </div>
        </a>`;

    link.insertAdjacentHTML('beforeend',htmlText);
    
}
