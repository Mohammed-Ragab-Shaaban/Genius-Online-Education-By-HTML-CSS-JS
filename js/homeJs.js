let menuList = document.getElementById(`menuList`);

menuList.style.maxHeight="0px";

function toggleMenu(){
    if(menuList.style.maxHeight =="0px"){
        menuList.style.maxHeight="300px";
        menuList.style.padding="20px";

    }else{
        menuList.style.maxHeight="0px";
        menuList.style.padding="0px";
        
    }
}

let tequnia = document.getElementById(`showAndHiddenTeqnia`);
function showAndHiddenTeqnia(){
    if(tequnia.style.display =="block"){
        tequnia.style.display = "none" ;
    }else{
        tequnia.style.display = "block";
    }
}

let Aklaque = document.getElementById(`showAndHiddenAkhlaq`);
function showAndHiddenAkhlaq(){
    if(Aklaque.style.display =="block"){
        Aklaque.style.display = "none" ;
    }else{
        Aklaque.style.display = "block";
    }
}

let Marefa = document.getElementById(`showAndHiddenMarefa`);
function showAndHiddenMarefa(){
    if(Marefa.style.display =="block"){
        Marefa.style.display = "none" ;
    }else{
        Marefa.style.display = "block";
    }
}

//counter to 500
        // let count1 = document.getElementById(`counterTo500_1`);
        // let count2 = document.getElementById(`counterTo500_2`);
        // let count3 = document.getElementById(`counterTo500_3`);
        // let s = document.getElementById(`count500500500`);

        // let counts1 = setInterval(updated);
        // let c1=0;
        // let c2 =0;
        // let c3=0;
        //     function updated(){
        //         count1.innerHTML = ++c1;
        //         if (c1 === 500) {
        //             clearInterval(counts1);
        //         }    
        // }


        // let counts2 = setInterval(count22);
        // function count22(){
        //     count2.innerHTML = ++c2;
        //     if (c2 === 500) {
        //         clearInterval(counts2);
        //     }    
        // }
        // let counts3 = setInterval(count33);
        // function count33(){
        //     count3.innerHTML = ++c3;
        //     if (c3 === 500) {
        //         clearInterval(counts3);
        //     }
        // }










