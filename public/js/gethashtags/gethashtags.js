
var filtered_hash_data = [];

const search = () => {
    //const fetch = require("node-fetch");

    let description = "This is a *&story all about how my &^%^life got flipped, turned upside down.";
    

    fetch(`/api/utils/gethashtag?d=${encodeURIComponent(description)}`, {
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            filterData(data);
            //console.log(filtered_hash_data);
        });
}

var resultParentEl = document.getElementById("searchResultsParent");
const filterData = (data) => {
    for (var i=0; i < data.data.length; i++) {
        if (data.data[i].hashtag) {
            //filtered_hash_data.push(data.data[i].hashtag);
            let hash = "#" + data.data[i].hashtag;
            var btnx = document.createElement("button");
            btnx.textContent = hash;
            btnx.classList.add("Btn", "hash");
            resultParentEl.appendChild(btnx);
        }
    }
    //console.log(filtered_hash_data);
    //return filtered_hash_data;
}


const makeButtons = () => {

}

search();