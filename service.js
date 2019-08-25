
// DAL - Data Access Layer

function getImages(pageNumber, successCallback) {
   $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`, {
     success: function(data) {
         successCallback(data);
     }
   });
}

// successCallback(data) - колбек



