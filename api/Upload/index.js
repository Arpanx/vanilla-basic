module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    // encode body to base64 string
    var bodyBuffer = Buffer.from(req.body);
    // get boundary for multipart data e.g. ------WebKitFormBoundaryDtbT5UpPj83kllfw
    var boundary = multipart.getBoundary(req.headers['content-type']);
    // parse the body
    var parts = multipart.Parse(bodyBuffer, boundary);
    context.res = { body : { name : parts[0].filename, type: parts[0].type, data: parts[0].data.length}}; 
    context.done();  

    // if (req.query.name || (req.body && req.body.name)) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: "Hello " + (req.query.name || req.body.name)
    //     };
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Please pass a name on the query string or in the request body"
    //     };
    // }
};