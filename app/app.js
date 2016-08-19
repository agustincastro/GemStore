
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

  // Handles panel interactions
  app.controller('PanelController', function(){
    //Initialize first selected tab as property of the controller
    this.tab = 1;
    //Handles tab assignment when selected
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
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
      description: 'Belongs to the gemstone family of Beryls. Origin of name Latin "aqua"meaning water and "mar"sea. Legend has it that Mermaids tails were made of aquamarine.',
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
