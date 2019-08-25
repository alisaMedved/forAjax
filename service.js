// DAL - Data Access Layer

function getImages(pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`);
    return promise;
}





