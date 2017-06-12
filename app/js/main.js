

function checkFunc(){
	var elems = document.getElementsByTagName('h6');
	for (var i=0;i<elems.length;i+=1){
	  
	  if(document.getElementById("description").checked==true){
	  	elems[i].style.display = 'block';
	  }
	  else{
	  	elems[i].style.display = 'none';
	  }
	}
}