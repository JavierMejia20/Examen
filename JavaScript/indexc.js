let num = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const img = document.querySelector(".img");

btns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const styles = event.currentTarget.classList;
        if(styles.contains("btn-danger")){
            num--;
        }
        else if(styles.contains("btn-success")){
            num++;
        }
        else{
            num=0;
        }
        value.textContent = num;

        if(num>0){
            value.style.color = "green";
        }
        else if(num<0){
            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }

        if(num==0){
            img.src="img/timido.png";
            //document.getElementById("img1").src="img/timido.png";
        }
        else if(num>0){
            img.src="img/feliz.png";
            //document.getElementById("img1").src="img/feliz.png";
        }
        else{
            img.src="img/enojado.png"
            //document.getElementById("img1").src="img/enojado.png";
        }
    });
});