const express = require('express')
const app = express()

testData = {
  "atcocode": "0180BAC30303",
  "smscode": "bthjdmp",
  "request_time": "2017-12-25T16:13:14Z",
  "name": "Brougham Hayes",
  "stop_name": "Brougham Hayes",
  "bearing": "SE",
  "indicator": "SE-bound",
  "locality": "Oldfield Park, Bath",
  "departures": {
    "U1": [
      {
        "mode": "bus",
        "line": "U1",
        "line_name": "U1",
        "direction": "Oldfield Park, Junction Road",
        "operator": "_noc_FBRI",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "20:18",
        "expected_departure_time": null,
        "best_departure_estimate": "20:18",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      },
      {
        "mode": "bus",
        "line": "U1",
        "line_name": "U1",
        "direction": "Oldfield Park, Junction Road",
        "operator": "_noc_FBRI",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "20:38",
        "expected_departure_time": null,
        "best_departure_estimate": "20:38",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      },
      {
        "mode": "bus",
        "line": "U1",
        "line_name": "U1",
        "direction": "Oldfield Park, Junction Road",
        "operator": "_noc_FBRI",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "20:58",
        "expected_departure_time": null,
        "best_departure_estimate": "20:58",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      }
    ],
    "20A": [
      {
        "mode": "bus",
        "line": "20A",
        "line_name": "20A",
        "direction": "University of Bath, Sports Training Village",
        "operator": "_noc_FHML",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "20:33",
        "expected_departure_time": null,
        "best_departure_estimate": "20:33",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      },
      {
        "mode": "bus",
        "line": "20A",
        "line_name": "20A",
        "direction": "University of Bath, Sports Training Village",
        "operator": "_noc_FHML",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "21:33",
        "expected_departure_time": null,
        "best_departure_estimate": "21:33",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      },
      {
        "mode": "bus",
        "line": "20A",
        "line_name": "20A",
        "direction": "Whiteway, Whiteway Circle",
        "operator": "_noc_FHML",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "22:33",
        "expected_departure_time": null,
        "best_departure_estimate": "22:33",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      }
    ],
    "20C": [
      {
        "mode": "bus",
        "line": "20C",
        "line_name": "20C",
        "direction": "University of Bath, Sports Training Village",
        "operator": "_noc_FHML",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "20:47",
        "expected_departure_time": null,
        "best_departure_estimate": "20:47",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      },
      {
        "mode": "bus",
        "line": "20C",
        "line_name": "20C",
        "direction": "University of Bath, Sports Training Village",
        "operator": "_noc_FHML",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "21:47",
        "expected_departure_time": null,
        "best_departure_estimate": "21:47",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      },
      {
        "mode": "bus",
        "line": "20C",
        "line_name": "20C",
        "direction": "Bath City Centre, Dorchester Street",
        "operator": "_noc_FHML",
        "date": "2017-12-25",
        "expected_departure_date": null,
        "aimed_departure_time": "22:47",
        "expected_departure_time": null,
        "best_departure_estimate": "22:47",
        "source": "NextBuses",
        "dir": null,
        "id": null,
        "operator_name": null
      }
    ]
  },
  "source": "NextBuses"
}


app.get('/v3/uk/bus/stop/0180BAC30303/live.json', (req, res) => {
    console.log(req.query)
    res.send(testData)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))