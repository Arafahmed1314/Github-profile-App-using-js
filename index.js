const api="https://api.github.com/users/";
// console.log(api+"mdatik-3");
const search=document.querySelector("#search");
function formSubmit(e){

    console.log("form event", e);

    if(search.value!=""){
        getUser(search.value);
        // console.log(search.value)
    }
    else{
        alert("Enter userName");
    }
    search.value=""
    return false;
}

// search.addEventListener("mouseover",()=>{

// })
const getUser=async(userName)=>{
const res= await fetch(api+userName);
const data= await res.json();


// console.log(data)
    const main=document.getElementById("main");
        const html=` <div
        class="card rounded-lg min-w-[600px] h-fit flex items-center text-xl bg-yellow-300 text-black p-3 gap-5">
        <div >
            <img src="${data.avatar_url}" alt="img"
                class="avater w-36 rounded-full">
        </div>
        <div class="user-info w-[400px]">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <ul class="info flex gap-3">
                <li>${data.followers} <strong>Followers</strong></li>
                <li>${data.following}<strong>Following</strong></li>
                <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>
            <div class="repos mt-1 flex flex-wrap gap-2 overflow-hidden">

            </div>
        </div>
    </div>`
    main.innerHTML=html;
    getRepos(userName)
}

getUser("arafahmed1314");
// repos.Style="mt-1";
const getRepos= async (userName)=>{
const repos=document.querySelector(".repos")

    const res= await fetch(api+userName+"/repos");
    const data= await res.json();

    data.forEach((item)=>{
        // console.log(item);
        const elem=document.createElement("a");
        elem.classList.add("repo");
        elem.href=item.clone_url;
        elem.target="_blank"
        elem.innerText=item.name;
        repos.appendChild(elem);
    })
}
{/* <a href="#" class="repo" target="_blank">Repo1</a>
<a href="#" class="repo" target="_blank">Repo2</a>
<a href="#" class="repo" target="_blank">Repo3</a> */}