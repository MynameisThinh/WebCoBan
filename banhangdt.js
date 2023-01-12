var KichThuoc = document.getElementsByClassName("center")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
function Next(){
	if(Chuyen < Max) Chuyen += KichThuoc;
	else Chuyen = 0;
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
    
}

function Back(){
	if(Chuyen == 0) Chuyen = Max;
	else Chuyen -= KichThuoc;
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
    
}
setInterval(() => {
    Next();
},10000);

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



            
            
            
           


	

