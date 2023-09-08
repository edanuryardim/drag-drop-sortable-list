var list=document.querySelector(".items");

new Sortable(list,{
    animation:400,
    ghostClass:"ghost",
    chosenClass:"chosen",
    dragClass:"drag",
    onEnd:function(){
        console.log("Sürükleme işlemi bitti");
    }
});