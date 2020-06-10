const request = require('request');

const dogApi = (dogType, callback) => {
    const url = 'https://dog.ceo/api/breed/' + dogType + '/images';
    request({url: url, json: true},(error, response) =>{
        if(error){
            callback('Unable to connect location services', undefined);
        }
    
        else{
            console.log(response.body.message);
            callback(undefined,
                 {image: response.body.message})
        }
    })

}

module.exports = dogApi;
