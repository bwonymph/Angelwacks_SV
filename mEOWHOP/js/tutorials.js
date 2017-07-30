angular.module('tutorials', [])

.service('Tutorials', [function(){
    
    var tutorials_list = [
        {
          key: 'deepdive',
          name: 'Fall Housing Lease',
          description: 'An indepth overview of the new Creator',
          id: 'lTLTs2ZA2JQ'
        },
        {
          key: 'codingtutorial',
          name: 'Neighbor Agreement sheet',
          description: 'Learn how to use our Code feature',
          id: 'IrwrZBBOiP8'
        },
        {
          key: 'sell',
          name: '2020 Fell St House',
          description: 'Use Creator to Close Deals',
          id: 'XPOXiwUFj7E',
          blog: 'http://blog.ionic.io/sell-your-client-a-mobile-app/'
        },
        {
          key: 'googlemaps',
          name: 'Hernandez Agreement',
          description: 'How to use our new Maps Component',
          id: 'jH6pehfUNp4'
        },
        {
          key: 'googlemaps',
          name: 'Juniper Agreement',
          description: 'How to use our new Maps Component',
          id: 'jH6pehfUNp4'
        },
        {
          key: 'googlemaps',
          name: 'Makishima Agreement',
          description: 'How to use our new Maps Component',
          id: 'jH6pehfUNp4'
        }
      ];
      
      var tutorials_keys = {};

      for (var i=0;i<tutorials_list.length;i++){
        tutorials_keys[tutorials_list[i].key] = tutorials_list[i];
      }

    return {
        list: tutorials_list,
        keys: tutorials_keys
    }

}]);