(function(){
    
    var groceryFunction = function($http){
      var endpoint = "http://127.0.0.1:3030/api/releases/"
      var login = function(credentials){
            return $http.post(endpoint + "login", credentials)
                        .then(function(response){
                           return response; 
                        });
      };
      
      var register = function(data){
            return $http.post(endpoint + "register", data)  
                        .then(function(response){
                            return response;
                        });
      };

      var getNotes = function(){
            return $http.get(endpoint + "notes")  
                        .then(function(response){
                            return response;
                        });
      };

      var postNotes = function(data){
            return $http.post(endpoint + "notes", data)  
                        .then(function(response){
                            return response;
                        });
      };

      var deleteNotes = function(data){
        return $http.post(endpoint + "remove", data)  
                        .then(function(response){
                            return response;
                        });
      };
      
      var getHistory = function(){
        return $http.get(endpoint + "save")  
                        .then(function(response){
                            return response;
                        });
      };

      var addHistory = function(data){
        return $http.post(endpoint + "save", data)  
                        .then(function(response){
                            return response;
                        });
      };


      return {
          loginAPI: login,
          register: register,
          getNotes: getNotes,
          postNotes: postNotes,
          deleteNotes: deleteNotes,
          getHistory: getHistory,
          addHistory: addHistory

      };
        
    };
    
    var app = angular.module("myApp");
    app.factory("groceryService", groceryFunction);
    
}());