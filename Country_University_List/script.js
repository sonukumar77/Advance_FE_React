const BASE_URL = "http://universities.hipolabs.com";

const search_box = document.getElementById("search_box");
const search_btn = document.getElementById("search_btn");


const fetchUniversity = (e) =>{
    e.preventDefault();
    // console.log();

    const search_query = search_box.value;

    let x = fetch(`${BASE_URL}/search?country=${search_query}`).then((res) => {
        return res.json()  
    
    }).then((data) =>{
        // console.log(data[0]); 
        // console.log(data); 
        let length = data.length;
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for (let i =0;i<=length;i++)
        {
            let uni_name = data[i].name;
            let uni_country = data[i].country;
            let uni_domain = data[i].domains[0];
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            td1.innerHTML = uni_name;
            td2.innerHTML = uni_country;
            td3.innerHTML = uni_domain;

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tbody.appendChild(tr)
            // console.log(i)
            // console.log(data[i].name)

        }
        
        // data.forEach(element => {
        //     // console.log(element); 
        //     // console.log(element.name); 
        //     let tr = document.createElement("tr");
        //     let td = document.createElement("td");
        //     td.innerHTML = element.name;

        //     tr.appendChild(td)
        //     tbody.appendChild(tr)

        // });
    });
}


// fetch(BASE_URL).then(resp => { return resp.json();}).then(data => console.log(data))
// same output short code



search_btn.addEventListener("click",fetchUniversity);
