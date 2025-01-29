---
order: -2
---

Every request to the API supports a certain number of parameters sent in the URL.

For example, the api/2.0/people request can be appended with several parameters:

``` http
api/2.0/people?startIndex=10&count=25
```

## Request parameters

| Parameter    | Description                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| count        | Number of the elements returned.                                                                                                                                    |
| startIndex   | Number of the elements to be skipped in the beginning. Used for response data pagination.                                                                           |
| sortBy       | Sorts results by the field name.                                                                                                                                    |
| sortOrder    | Sorting direction (*"descending"* or *"ascending"*). It must be used together with the **sortBy** parameter: *api/2.0/people?sortBy=userName\&sortOrder=descending* |
| filterBy     | Filters results by the field name.                                                                                                                                  |
| filterOp     | Filtering operation: *"contains"*, *"equals"*, *"startsWith"*, *"present"*.                                                                                         |
| filterValue  | Filter value. It must be used together with the **filterBy** and **filterOp** parameters: *api/2.0/people?filterBy=userName\&filterOp=startsWith\&filterValue=Alex* |
| updatedSince | Returns the values updated or created since a certain period of time.                                                                                               |
