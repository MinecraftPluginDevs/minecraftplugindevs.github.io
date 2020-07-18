function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}



var url = "https://api.github.com/users/MinecraftPluginDevs/repos";
var urltwo = "https://api.github.com/orgs/minecraftplugindevs/members";
const ul = document.getElementById('projects');
// get memebers
fetch(urltwo)
.then((resp) => resp.json()) 
.then(function(data){
    var count = 0;
    return data.map(function(){
        let name = document.createElement("p");
        name.innerHTML = data[count]["login"];
        document.getElementById("Members").appendChild(name);
    })
})

fetch(url)
.then((resp) => resp.json()) 
.then(function(data){
    var count = 0;
    return data.map(function(){
        let titleArea = document.createElement("h2");
        let desc = document.createElement("p");
        titleArea.innerHTML = data[count]["name"];
        desc.innerHTML = data[count]["description"];
        document.getElementById("projects").appendChild(titleArea);
        document.getElementById("projects").appendChild(desc);
        count++;
    })
}).catch(function(error){
    alert(error);
})

