var questionLists = document.getElementsByClassName("section__document-question-item");
var i;
for(i=0; i < questionLists.length ; i++) {
    questionLists[i].addEventListener("click", function(){
        var panel = this.nextElementSibling;
        for (var j = 0 ; j <questionLists.length ; j++){
            if(this != questionLists[j]){
            questionLists[j].classList.remove("active");
            if (i!=j){
                questionLists[j].nextElementSibling.style.maxHeight=null;
            }
        } 
    }
    this.classList.toggle("active");
    if(panel.style.maxHeight){
        panel.style.maxHeight=null;
    }else{
        panel.style.maxHeight = panel.scrollHeight+"px";
    }
});
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}