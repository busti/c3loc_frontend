# API 0.2
Version major.minor
 - major: braking change
 - minor: compatible addition

## Notes
json endpoints returning a list should always be encapsulated ba an object to make non-breaking api changes easier, like this example
```json
    {"events":[{},{},{}]}
```

##Endpoints
### Items

#### ``GET /api/<version.major>/<event.id>/items``

#### ``GET /api/<version.major>/<event.id>/items/<search_query>``
Returns all results of a fuzzy search over all items for <search_query>. The <search_query> should be url-encoded. 

#### ``GET /api/<version.major>/<event.id>/item/<item.uid>``

#### ``DELETE /api/<version.major>/<event.id>/item/<item.uid>``

#### ``PUT /api/<version.major>/<event.id>/item/<item.uid>``

#### ``POST /api/<version.major>/<event.id>/item``

### Boxes

#### ``GET /api/<version.major>/boxes``

#### ``GET /api/<version.major>/box/<box.cid>``

#### ``DELETE /api/<version.major>/box/<box.cid>``

#### ``PUT /api/<version.major>/box/<box.cid>``

#### ``POST /api/<version.major>/box/<box.cid>``

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

#### ``GET /api/<version.major>/events``

returns a list of all tracked events

### Files/Images

#### ``GET /api/<version.major>/images/<file.hash>``

#### ``GET /api/<version.major>/thumbs/<file.hash>``