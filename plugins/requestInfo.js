

function requestInfo(req){
    var ip = req.connection.remoteAddress;
    var headers = eval(req.headers);
    ip = ip.split(':');
    var data = {
        'ip': ip[3],
        'user-agent': headers['user-agent']
    }
    console.log(data);
    return data;
}


module.exports = requestInfo;