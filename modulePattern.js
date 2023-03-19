const products = [
    {name: "Oguzhan", surname:"Kotan"},
    {name:"Nuran", surname:"Kotan"},
    {name:"Esen", surname:"Kotan"}
];

var ProductController = (function(data){
    // private members
    var collections = data || [];

    const addProduct = function(...product){
        collections.push(product);
    }
    
    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index >= 0){
            collections.splice(index,1);
        }
    }

    const getProducts = function(){
        return collections;
    }

    // public members
    return{
        addProduct,
        removeProduct,
        getProducts
    }

})(products);

ProductController.removeProduct(products[0]);
console.log(ProductController.getProducts());


// Module Extending

var extended = (function(m){

    m.sayHello = function(){
        console.log("Hello from extended module");
    }
    return m;

})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());