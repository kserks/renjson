/**
 * @Simple ajax function
 */
function ajax(pathToScene){
   return new Promise(function(resolve, reject){
  		const xhttp = new XMLHttpRequest();
 			xhttp.onreadystatechange = function (){
    			 if (this.readyState == 4 && this.status == 200) {
       
     				resolve(JSON.parse(this.responseText));
   			 	}
  			};
  		
  			xhttp.open("GET", pathToScene, true);
  			xhttp.send();


  });


};

export default ajax;
