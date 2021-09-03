


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
            //Do what next
        });
}

search();