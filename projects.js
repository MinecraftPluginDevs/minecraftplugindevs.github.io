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
        document.getElementById("Members").appendChild(name);
    })
}).catch(function(error){
    alert(error);
});

fetch(url)
.then((resp) => resp.json()) 
.then(function(data){
    var count = 0;
    return data.map(function(){
        let titleArea = document.createElement("h2");
        let desc = document.createElement("p");
        let url = document.createElement("a");
        url.href = data[count]["html_url"];
        url.innerHTML = "Github Repo";
        titleArea.innerHTML = data[count]["name"];
        desc.innerHTML = data[count]["description"];
        document.getElementById("projects").appendChild(titleArea);
        document.getElementById("projects").appendChild(desc);
        document.getElementById("projects").appendChild(url);
        count++;
    })
}).catch(function(error){
    alert(error);
})

