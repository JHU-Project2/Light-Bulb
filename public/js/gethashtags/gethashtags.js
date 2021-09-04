const search = () => {
    //const fetch = require("node-fetch");

    let description = "This is a *&story all about how my &^%^life got flipped, turned upside down.";
    

    fetch(`/api/utils/gethashtag?d=${encodeURIComponent(description)}`, {
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            filterData(data);
        });
}

var resultParentEl = document.getElementById("searchResultsParent");
const filterData = (data) => {
    for (var i=0; i < data.data.length; i++) {
        if (data.data[i].hashtag) {
            let hash = "#" + data.data[i].hashtag;
            var btnx = document.createElement("button");
            btnx.textContent = hash;
            btnx.classList.add("Btn", "hash");
            resultParentEl.appendChild(btnx);
        }
    }
}

search();