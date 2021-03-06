/*
    (c)2020 JackTheWebDev All Rights Reserved. 
*/

var url = "https://api.github.com/users/MinecraftPluginDevs/repos";
var urltwo = "https://api.github.com/orgs/minecraftplugindevs/members";
const ul = document.getElementById('projects');

// get memebers
fetch(urltwo)
.then((resp) => resp.json()) 
.then(function(data){
    var count = 0;
    return data.map(function(){
        let name = document.createElement("a");
        name.innerHTML = data[count]["login"];
        name.href = data[count]["html_url"];
        document.getElementById("loadingtwo").style.display = "none";
        document.getElementById("Members").appendChild(name);
    })
}).catch(function(error){
    alert(error);
});

// Get Projects
fetch(url)
.then((resp) => resp.json()) 
.then(function(data){
    var count = 0;
    return data.map(function(){
        let titleArea = document.createElement("h3");
        let desc = document.createElement("p");
        let url = document.createElement("a");
        url.href = data[count]["html_url"];
        url.innerHTML = "Github Repo";
        titleArea.innerHTML = data[count]["name"];
        desc.innerHTML = data[count]["description"];
        document.getElementById("loading").style.display = "none";
        document.getElementById("projects").appendChild(titleArea);
        document.getElementById("projects").appendChild(desc);
        document.getElementById("projects").appendChild(url);
        count++;
    })
}).catch(function(error){
    alert(error);
})

