// DAL - Data Access Layer

function getImagesOld(pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`);
    return promise;
}

function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`);
    return promise
        .then((response) => {
            return response.data;
        })
}




