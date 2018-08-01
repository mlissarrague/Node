const http = require('http');
//require adwords
const AdwordsUser = require('Node').AdwordsUser;
const AdwordsConstants = require('Node').AdwordsConstants;


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(8080);


let user = new AdwordsUser({
  //WTF AM I SUPPOSED TO PUT HERE?!?!?!
    developerToken: 'QBNpVwST5DweFUoqzrz3NA', //your adwords developerToken
    userAgent: 'lissarrague', //any company name
    clientCustomerId: '282-312-1813', //the Adwords Account id (e.g. 123-123-123)
    client_id: '282-312-1813', //this is the api console client_id
    client_secret: 'INSERT_OAUTH2_CLIENT_SECRET_HERE',
    refresh_token: 'INSERT_OAUTH2_REFRESH_TOKEN_HERE'
});

let campaignService = user.getService('CampaignService', 'v201806')

//create selector
//brings data as an objet
let selector = {
    fields: ['Id', 'Name'],
    ordering: [{field: 'Name', sortOrder: 'ASCENDING'}],
    paging: {startIndex: 0, numberResults: AdwordsConstants.RECOMMENDED_PAGE_SIZE}
}

campaignService.get({serviceSelector: selector}, (error, result) => {
    console.log(error, result);
})


let params = {
    query: 'SELECT Id, Name WHERE Status = "ENABLED" ORDER BY Name DESC LIMIT 0,50'
};

campaignService.get(params, (error, result) => {
    console.log(error, result);
})
