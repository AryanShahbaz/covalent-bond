
function check_input_carbon_number(){
       var number=document.getElementById("number-carbon-input");
       if(number.value >0 && number.value <11){
              console.log("OK,carbon number input correct");
       }
       else if(number.value != "" ){
              alert("ERROR,Wrong number for carbon,\n Must between 1 and 10.")
       }
}
function carbon(main_box){
       main_box.append("<li class='atom C'></li>")       
      
}
function hydrogen(main_box){
       main_box.append('<li class="atom H"></li>')
}

// var list = $("#simulator").append('<ul class="molecule-wrap"></ul>').find('ul');

function clearr() {
       var box=document.getElementById("mol");
       box.innerHTML=" ";
       console.log("clear RUN");
}
function detect_molecule(c,h){
       if(c==1){
              var mol='C'+"H"+h ;
       }
       else{
              var mol='C'+c+"H"+h ;
       }
       var main_name=("molecule "+mol);
       
       console.log("Main : ",main_name);
       console.log("Molecule",mol);
       // return main_name;
       return mol;
}



function simulate(c,h,type){
       // detect_molecule(c,h);
       clearr();
       var name=detect_molecule(c,h);
       var mname = (name);
       // var list = $("#simulator").append('<ul class="molecule-wrap"></ul>').find('ul');
       var list = $(".molecule-wrap").append(`<ul class="molecule ${mname}"></ul>`).find('ul');

       // var list=$(".molecule-wrap").append("<ul class=",name,"><ul>").find('ul');
       // clear(list);
       for(var i=1;i<=c;i++){      
              carbon(list);
       }

       for(var i=1;i<=h;i++){
              hydrogen(list);
       }









       // var container = document.getElementById("simulator");
       // for(var i=1;i<=c;i++){
       //        carbon();
       // }
       // for(var i=1;i<=h;i++){
       //        hydrogen();
              
       // }

//        var multipleLinesHTML = `
//        <ul class='molecule-wrap'>
//               <ul  class='molecule CH4'>
//                      <li class='atom C'></li>
//                      <li class='atom H'></li>
//                      <li class='atom H'></li>
//                      <li class='atom H'></li>
//                      <li class='atom H'></li>
//               </ul>
//        </ul>
//       `;
      
//       container.innerHTML = multipleLinesHTML;
}

function calculate_hydrogen(type,c){
       var h = 0;
       if(type=="alkan"){
              h=(2*c)+2;
       }
       else if(type=="alkene"){
              h=(2*c);
       }
       else if(type=="alkyne"){
              h=(2*c)-2;
       }
       return h;
}
function main(){
       var carbon_number = document.getElementById("number-carbon-input").value;
       var type_hydrocarbon = document.getElementById("hydrocarbon-type").value;
       var hydro=calculate_hydrogen(type_hydrocarbon,carbon_number);
       simulate(carbon_number,hydro,type_hydrocarbon);
       console.log("Simulate RUN");
       console.log("H : ",hydro);
}


