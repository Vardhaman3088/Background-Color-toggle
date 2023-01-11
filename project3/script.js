function changebg(ele){
    document.body.style.backgroundColor=ele;

    if(ele=="black"){
        let text=document.getElementsByClassName("mytext");
        for(it of text){
            it.style.color="white";
        }
    }
    else{
        let text=document.getElementsByClassName("mytext");
        for(it of text){
            it.style.color="black";
        }
    }
}