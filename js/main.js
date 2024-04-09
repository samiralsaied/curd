
let name =document.getElementById("name produt");

let price =document.getElementById("price");

let taxes =document.getElementById("taxes");

let ads    =document.getElementById("ads");

let discount =document.getElementById("discount");

let total =document.getElementById("total");

let count =document.getElementById("count");

let category =document.getElementById("category");

let sumipt =document.getElementById("sumipt");


// console.log(nameprodut,price,taxes, ads,discount, total,count,category,add);
// ---------------------------------------------------

// function  total1(){

// console.log("yes");             

// }
// ---------------
// !=''    التاكد من value ميكونيش فراغ
// let result=(price.value +taxes.value +ads.value)-discount.value; نص
// let result=(+price.value + +taxes.value + +ads.value)- +discount.value; اله حاسبة
//    total.style.background="#66a80f";   طول لم يكون ف بيانات لون اخضر
// 

// 
// else{

//     total='';  ليوجد بيانات
//     total.style.background="#c92a2a";  تغير خلفية لون red

// }
// -----------------------------------------------------------
// ====================#price input===========================================

function  total1(){

    if(price.value !=''){

    let result=(+price.value + +taxes.value + +ads.value)- +discount.value;

    total.innerHTML=result;

    total.style.background="#66a80f";
    

    }     

    else{

        total='';
        total.style.background="#c92a2a";

    }

}
// ==========================================================================



// انشاء DAta  table====================================


// --------------------

let addprodut='';
if( localStorage.produt  !=null ){

    addprodut=JSON.parse(localStorage.produt);
    
}
else{
    addprodut=[];
}

// let addprodut=[];

 sumipt.onclick=function(){

    let opject1={

    name:name.value,

    price: price.value, 

    taxes:  taxes.value,

    ads  :  ads.value,

 discount:  discount.value,

 total :total.value,

 count:count.value,
 
 category:category.value,
        


 }  
 
 addprodut.push(opject1);

 localStorage.setItem('produt',JSON.stringify(addprodut));

console.log(addprodut);

cleardata ();

show();


}

// ===================== clear input======================================

// مسح عناصر input

function cleardata (){

    name.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';

    count.value='';

    category.value='';


    

    


    total.value='';

}


// =============================================================




// show DATA table=====================================

// advansed: array يوجد بة data  نعمل loop



function show(){

    let table='';

    for(let i=0; i< addprodut.length; i++ ){

        // table=addprodut;
        // console.log(table[i]);

        table+= `


        <tr>

        <td>${i}</td>    
        <td>${ addprodut[i].name}</td>    
        <td>${ addprodut[i].price}</td>    
        <td>${ addprodut[i].taxes}</td>    
        <td>${ addprodut[i].taxes}</td>    
        <td>${ addprodut[i].ads}</td>    
        <td>${ addprodut[i].discount}</td>    
        <td>${ addprodut[i].count}</td>    
        <td>${ addprodut[i].category}</td>    
         
       
        <td><button id="update">update</button></td>
        <td><button onclick=" deletepro(${i})" id="delete">delete</button></td>



         </tr>  
         

        `

       
        

    }

    document.getElementById("tbody").innerHTML=table;


}


show();




// -----------------------------------------------------------------



// delete button table=====================================================




function deletepro(i){



    addprodut.splice(i,1);

    localStorage.produt=JSON.stringify(addprodut);
    show();


}



// ======================= updete====================================


function update(i){


}
