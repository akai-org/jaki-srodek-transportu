function distance_by_mode(origin, destination, mode){
    var distance = require('google-distance-matrix');

    distance.key('AIzaSyC_UJlZ8TgU6JempxOqk8OPhyUifF70aTU');

    distance.units('metric');
    distance.mode(mode);

    var origins = [origin];
    var destinations = [destination];
    var retunred = 0;
    x = distance.matrix(origins, destinations, function (err, distances) {
        if (err) {
            console.log(err);
        }
        if(!distances) {
            console.log('no distances');
        }
        if (distances.status == 'OK') {
            for (var i=0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.value;
                        var duration = distances.rows[i].elements[j].duration.value;
                        retunred = [duration, distance];
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance/1000 + ', ' + duration/3600);
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                    }
                }
            }
        }
        if (distances.error_message) {
            console.log(distances.error_message)
        }
    });
    while (!retunred){
        console.log('a');
    }
    return retunred;
}
console.log(distance_by_mode('trzcianka', 'poznan', 'driving'));
