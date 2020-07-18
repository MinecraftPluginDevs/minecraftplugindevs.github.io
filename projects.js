var url = "https://api.github.com/users/MinecraftPluginDevs/repos";
fetch(url)
.then((resp) => resp.json()) 
.then(function(data){
    document.createElement("p",{ id: "data"});
    document.getElementById("data").innerHTML = data;
})