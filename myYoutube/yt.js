const API_KEY = "AIzaSyCNNsaeVfh0-xKx5duVvroRJi_IztkBeJk";
const CLIENT_ID = "341638738999-i7rko2l3omdhaisd0oeltuii41smvq3v.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const BASE_URL = "https://www.googleapis.com";

const URL = `${BASE_URL}/youtube/v3/videos?id=7lCDEYXw3mM&key=${API_KEY}
&part=snippet,contentDetails,statistics,status`;


(() => {

    let prm = fetch(URL).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
    })
    
})();