
var productContainer;
if(localStorage.getItem("productData")==null)
{
    productContainer = []
}
else
{
    productContainer=JSON.parse(localStorage.getItem("productData"))
    displayProduct()
}




function addProduct()
{
   var productName = document.getElementById("productNameInp").value;
   var productPrice = document.getElementById("productPriceInp").value;
   var productCategory = document.getElementById("productCategoryInp").value;
   var productDesc = document.getElementById("productDescInp").value;



   var product=
   {
       name:productName,
       price:productPrice,
       category:productCategory,
       desc:productDesc,
   }


    productContainer.push(product)
    localStorage.setItem("productData" ,JSON.stringify( productContainer))
    displayProduct()

}
 
function displayProduct()
{
    var temp = "";

    for(var i=0 ; i<productContainer.length ; i++)
    {

    temp+=`              <div class="col-md-3">
    <div class="product">
        <img src="1.jpg" class="img-fluid">
        <h4>`+productContainer[i].name+` <span class="badge badge-dark ml-3">`+productContainer[i].category+`</span></h4>
        <p>`+productContainer[i].desc+`</p>
           <div class="price">`+productContainer[i].price+`</div>
           <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button>
           <button onclick="updateProduct(`+i+`)" class="btn btn-outline-dark">update</button>
    </div>

     </div>
     `
    }
    document.getElementById("productRow").innerHTML = temp;
}


function searchProduct(term)
{
    var temp = ``;
    for(var i=0 ; i<productContainer.length ; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            temp+=`              <div class="col-md-3">
            <div class="product">
                <img src="1.jpg" class="img-fluid">
                <h4>`+productContainer[i].name+` <span class="badge badge-dark ml-3">`+productContainer[i].category+`</span></h4>
                <p>`+productContainer[i].desc+`</p>
                   <div class="price">`+productContainer[i].price+`</div>
            </div>
               
             </div>
             `; 
        }
    }
    document.getElementById("productRow").innerHTML = temp;
}



function deleteProduct(index)
{
 var deleted = productContainer.splice(index , 1);
 localStorage.setItem("productData" ,JSON.stringify( productContainer))
 displayProduct()
}


function updateProduct(updateIndex)
{
  var updated = productContainer.find()
}
