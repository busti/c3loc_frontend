# API 0.1
Version major.minor
 - major: braking change
 - minor: compatible addition

## Notes
json endpoints return a list should always be encapsulated ba an object to make non-breaking api changes easier, like this example
```json
    {"events":[{},{},{}]}
```

##Endpoints
### Items

#### ``GET /api/<version>/<event.id>/items``

#### ``GET /api/<version>/<event.id>/items/<search_query>``
the <search_query> should be url-encoded

#### ``GET /api/<version>/<event.id>/item/<item.id>``

#### ``DELETE /api/<version>/<event.id>/item/<item.id>``

#### ``PUT /api/<version>/<event.id>/item/<item.id>``

#### ``POST /api/<version>/<event.id>/item/<item.id>``

### Boxes

#### ``GET /api/<version>/<event.id>/boxes``

#### ``GET /api/<version>/<event.id>/box/<box.id>``

#### ``DELETE /api/<version>/<event.id>/box/<box.id>``

#### ``PUT /api/<version>/<event.id>/box/<box.id>``

#### ``POST /api/<version>/<event.id>/box/<box.id>``

### Events
```json
{
"name":"36. Chaos Communication Congress",
"slug":"36C3",
"start": 1577401200,
"end": 1577746800,
"pre_start": 1576882800,
"post_end": 1577919600
}
```

#### ``GET /api/<version>/events``

returns a list of all tracked events

### Files/Images

#### ``GET /api/images/<file.hash>``