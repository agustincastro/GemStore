// module for all the functionality for products

(function(){
  //Defines a module for product stuff, parameters are module
  //names and dependencies
  var app = angular.module('store-products', []);

  app.directive("productDescription", function(){
    // the dash in the directive name translates to cammelcase
    return{
      //configuration object defining how the directive will work
      restrict: 'E',  // Type of directive, E=Element
      templateUrl: 'product-description.html'
    };
  });

  app.directive("productSpecs", function(){
    return{
      restrict: 'A',  // Type of directive, A=Attribute
      templateUrl: 'product-specs.html'
    };
  });

  app.directive("productPanels", function(){
    return{
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){ // Handles panel interactions
        //Initialize first selected tab as property of the controller
        this.tab = 1;
        //Handles tab assignment when selected
        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel', //controller alias
    }
  });

  app.directive("productGallery", function(){
    return{
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };
      },
      controllerAs: 'gallery',
    };
  });

})();
