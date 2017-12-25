(function(){
  var app = angular.module('store', []);

  app.controller('TabController', function(){
    this.tab = 'home';

    this.selectTab = function(setTab){
      this.tab = setTab;
      //alert(this.tab);
    };

    this.isSelected = function(checkTab){
      return this.tab == checkTab;
    };
  });

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    console.log($http);
    // $http.get('products.json').success(function(data){
    //   store.products = data;
    //   console.log(store);
    // }).error(function(data){
    //   //log error
    // });

    $http.get('products.json').then(successCallback, errorCallback);

    function successCallback(data){
        //success code
        console.log(data);
    }
    function errorCallback(error){
        //error code
        console.log("Data:"+error);
    }

    // let prod1 = new Product('shorts', 5, 'http://www.bodenimages.com/productimages/productmedium/17bsum_22504_blu.jpg', 'slim summer shorts');
    //
    // let prod2 = new Product('bikini', 15, 'http://www.bodenimages.com/productimages/productmedium/17bsum_22504_blu.jpg', 'beach bikini');
    //
    // let prod3 = new Product('sunglasses', 15, 'http://www.bodenimages.com/productimages/productmedium/17bsum_22504_blu.jpg', 'retro sunglasses');
    //
    // this.products.push(prod1);
    // this.products.push(prod2);
    // this.products.push(prod3);

  }]);

  app.controller('AddProduct', function(){
    this.product = {};
    this.addProduct = function(product){
      //products.push(product); // HOW TO GET TO PRODUCTS ARRAY FROM STORE CONTROLLER???
      alert(product+"added!");
      this.product = {}; // clears up the form
    }
  });


})();

function Product(name, price, imgUrl, description){
  this.name = name;
  this.price = price;
  this.imgUrl = imgUrl;
  this.description = description;
}
