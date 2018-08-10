function loadRepo(){
    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function () {
             if (this.readyState == 4 && this.status == 200) {
             let gitObject = JSON.parse(this.responseText);
         

             for (var i = 0; i < gitObject.length; i++) {
                  console.log(gitObject[i].name);
                  var ul = document.getElementById("repositories");
                  var li = document.createElement("li");
                  var a = document.createElement("a");

                 li.appendChild(document.createTextNode(gitObject[i].name));

                 a.appendChild(li);
                 a.setAttribute("href", gitObject[i].html_url);
                 ul.appendChild(a);
       
             
             
             
            
            
            }

        }

       
        
        
    }

gitHubRequest.open("GET", "https://api.github.com/users/craftlinker/repos", true);
gitHubRequest.send();
}




