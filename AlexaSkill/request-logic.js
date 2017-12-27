const https = require('http');

'https://transportapi.com/v3/uk/bus/stop/0180BAC30303/live.json?app_id=ba17d2cc&app_key=e96da9f381247fb39aa2835eae69418f&group=route&nextbuses=yes'

const intent = 'destination'

const requested_destination = 'University'

const destination = {
    University: ['U1','U2','U1X'],
    Town: ['1','5','U1'],
    Odeon: ['1','5'],
    Mike: ['9']
}

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/v3/uk/bus/stop/0180BAC30303/live.json?app_id=ba17d2cc&app_key=e96da9f381247fb39aa2835eae69418f&group=route&nextbuses=yes',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  // console.log('headers:', res.headers);

  res.on('data', (d) => {
    // process.stdout.write(d);
    var responseObject = JSON.parse(d.toString())
    
    var nextBuses =[]

    for(i in destination[requested_destination]) {
        if(responseObject.departures[destination[requested_destination][i]])
            nextBuses.push(responseObject.departures[destination[requested_destination][i]][0])
    }

    console.log('Potential Buses');
    console.log(nextBuses)
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();