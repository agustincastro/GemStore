
// DIRECTIVES: HTML annotations that trigger javascript events
// MODULES: Where our application components live
// CONTROLLERS: Where we add application behaviour
// EXPRESSIONS: How values get displayed within the page.


// It's good practice to store your application in a closure
(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;

  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some gens have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: '../assets/img/gem-01.gif',
          thumb: '../assets/img/gem-01.gif',
        }
      ],
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '...',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: '../assets/img/gem-02.gif',
          thumb: '../assets/img/gem-02.gif',
        }
      ],
    }
  ];

})();
