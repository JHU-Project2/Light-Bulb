async function newFormHandler(event) {
    event.preventDefault();


    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;

    const response = await fetch(`/api/innovations`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
            //add
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    if (response.ok) {
        document.location.replace('/dashboard');

    } else {
        alert(response.statusText);
    }
};
async function gethashtag(event) {
    event.preventDefault();



    const content = document.querySelector('input[name="content"]').value;

    const response = await fetch(`/api/utils/gethashtag?d=${encodeURIComponent(content)}`)


    if (response.ok) {

        const hashes = await response.json()
        console.log(hashes.data)

        const hashlist = document.querySelector("#hashsuggestions")
        hashlist.innerHTML = ""

        hashes.data.forEach(hash => {
            const x = document.createElement('input')

            x.type = "checkbox"
            x.value = `hash-${hash.tag}`

            x.id = x.value

            const label = document.createElement('label')
            label.htmlFor = x.id
            label.appendChild(document.createTextNode(hash.tag))

            hashlist.appendChild(x)
            hashlist.appendChild(label)
        })

    } else {
        alert(response.statusText);
    }
};


document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);

document.querySelector('#gethashtag').addEventListener('click', gethashtag);

//functionality TBD