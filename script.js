console.log("hello JavaScript")

const options = {
	method: 'GET',
	headers: {
        // grab the headers from your account on rapidAPI
	}
};

const contentDiv = document.querySelector("#content")

function searchWord(el){
    console.log(el.value)
    fetch(
        // api url ie: "https://apiSite.com" goes here...
    )
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            // partOfSpeech
            var pOs = response.results[0]['partOfSpeech']
            contentDiv.innerHTML=`<p>Part of Speech: ${pOs}</p>`
            // definition
            var definition = response.results[0]['definition']
            contentDiv.innerHTML += `<p>definition: ${definition}</p>`
        })
        .catch(err => console.error(err));
}


console.log()