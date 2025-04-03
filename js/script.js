
function fetchDogImage() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
    });

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const imageUrl = data[0].url;
                document.getElementById("imageContainer").innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
            }
        })
        .catch(error => console.log('Error:', error));
}
