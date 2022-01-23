const ACCESS_KEY = "nab59kG3MHi2PAqu40rQu_sDgAZnz8Sbn8psA4OCCk8";
const SECRET_KEY = "MJLC8cTa1JChBFicbtBD8ckFhfpNQme-M422qNwdgHI";

const BASE_URL = "https://api.unsplash.com";
console.log("💘")

// this is syntex before es6
// fetch('https://api.unsplash.com/photos/?client_id=' + ACCESS_KEY)

// this is templating approach after es6

const prm = fetch(`${BASE_URL}/photos/?client_id=${ACCESS_KEY}`);

// nested then not good approach ❌
// prm.then((res) =>{
//     const json_prm = res.json();
//     console.log(json_prm);
//     console.log(res);

//     json_prm.then((res_obj) =>{
//         console.log(res_obj)
//     })
// })


// good approach then chaining

// prm.then((res)=>{
//     return res.json();
// }).then((res_obj)=>{
//     console.log(res_obj);
// })



// async await concept
// without try catch block 

// const fn = async () => {

//     const res = await fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);
//     const res_obj = await res.json();
//     console.log(res);
//     console.log(res_obj);
    
// }
// fn();



// with try catch block 

// const fn = async () => {
//     try{
   
//     const res = await fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);
//     const res_obj = await res.json();
//     console.log(res);
//     console.log(res_obj);
//     } catch(e){
//         console.log("something went wrong")
//     }
// }
// fn();


//  to provide security use IIFE

(() => {
    let images = [];


    const search = async (search_query) => {
        try
        {
            const fetch_config = {
                headers:{
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            };
            const res = await fetch(`${BASE_URL}/search/photos?query=${search_query}`,fetch_config);
            images = await res.json();
            images = images.results;
            // console.log(images)
            disp();
        } catch(e){
            
            console.log("something is wrong2");
        }
    }


    (async () => {
        try{
            
            const current_location = window.location.href;
            const url_obj = new URL(current_location);
            const search_query = url_obj.searchParams.get("search_query");
            // console.log(url_obj)
            if(search_query == null || search_query == "")
            {
                const res = await fetch(`${BASE_URL}/photos/?client_id=${ACCESS_KEY}`);
                images = await res.json();
                disp();
            }
            else
            {
                search(search_query);
            }
        

        } catch(e){
            console.log("something went wrong1")
        }
    })();


    const disp = () =>{
        
        const container = document.getElementById("container");
        container.innerHTML = "";
        // document.write(images);
        // console.log(images)
        images.forEach((elem) => {
            
            const img_loc = elem.links.download;
            // console.log(img_loc)
            const img_box = document.createElement("div")
            const img = document.createElement("img");
            img.src = img_loc;
            img_box.appendChild(img);
            // console.log(img_box)
            container.appendChild(img_box)
        })
        
    }


})();