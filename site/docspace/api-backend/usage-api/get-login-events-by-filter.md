# getLoginEventsByFilter

Referenced types are defined in the [full reference](../api.md).

> LoginEventArrayWrapper getLoginEventsByFilter(userId, action, from, to, count, startIndex)

`GET /api/2.0/security/audit/login/filter`

Get filtered login events

Returns the portal's login events that match the filters in the query - by user, by login action and by period - and is the operation behind the login history page. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal's pricing plan; when that option is missing the filters are silently ignored and the answer is the same twenty most recent events that `GET api/2.0/security/audit/login/last` returns, and when the login history and audit trail section is disabled altogether the call is answered with 402. Omit a filter to match everything. `from` and `to` are read as UTC instants while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it, `startIndex` skips events from the newest end, and the page window is applied to the log before the filters, so a page can hold fewer items than `count` while older matches still exist. The operation is read-only; take the values accepted by `action` from `GET api/2.0/security/audit/types`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | query | **UUID** (uuid) | The user whose sign-in attempts are kept, given by portal user ID. Leave it at the empty GUID to keep the events of every user. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **action** | query | **MessageAction** | The sign-in action recorded, spelled as `GET api/2.0/security/audit/types` lists it under `actions` - a successful login, a failed one, a logout. The default value keeps every action. | [optional] [example: `FileCreated`] [enum: `1000`, `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`, `1009`, `1010`, `1011`, `1012`, `1013`, `1014`, `1015`, `1016`, `1017`, `1018`, `1019`, `1020`, `1021`, `1022`, `1023`, `1024`, `1025`, `1026`, `1027`, `1028`, `1029`, `4000`, `4001`, `4002`, `4003`, `4004`, `4005`, `4006`, `4007`, `4008`, `4009`, `4010`, `4011`, `4012`, `4013`, `4014`, `4015`, `4016`, `4017`, `4018`, `4019`, `4020`, `4021`, `4022`, `4023`, `4024`, `4025`, `4026`, `4027`, `4028`, `4029`, `4030`, `4031`, `4032`, `4033`, `4034`, `4035`, `4036`, `4037`, `5000`, `5001`, `5002`, `5003`, `5004`, `5005`, `5006`, `5007`, `5008`, `5009`, `5010`, `5011`, `5012`, `5013`, `5014`, `5015`, `5016`, `5017`, `5018`, `5019`, `5020`, `5021`, `5022`, `5023`, `5024`, `5025`, `5026`, `5027`, `5028`, `5029`, `5030`, `5031`, `5032`, `5033`, `5034`, `5035`, `5036`, `5037`, `5038`, `5039`, `5040`, `5041`, `5042`, `5043`, `5044`, `5045`, `5046`, `5047`, `5048`, `5049`, `5050`, `5053`, `5054`, `5055`, `5056`, `5057`, `5058`, `5059`, `5060`, `5061`, `5062`, `5063`, `5064`, `5065`, `5066`, `5068`, `5069`, `5070`, `5071`, `5072`, `5073`, `5074`, `5075`, `5076`, `5077`, `5078`, `5079`, `5080`, `5081`, `5082`, `5083`, `5084`, `5085`, `5086`, `5087`, `5088`, `5089`, `5090`, `5091`, `5092`, `5093`, `5094`, `5095`, `5096`, `5097`, `5098`, `5099`, `5100`, `5101`, `5102`, `5103`, `5104`, `5105`, `5106`, `5107`, `5108`, `5109`, `5110`, `5111`, `5112`, `5113`, `5114`, `5115`, `5116`, `5117`, `5118`, `5119`, `5120`, `5121`, `5122`, `5123`, `5124`, `5125`, `5126`, `5127`, `5128`, `5129`, `5130`, `5131`, `5132`, `5133`, `5150`, `5151`, `5152`, `5153`, `5154`, `5155`, `5156`, `5157`, `5158`, `5159`, `5160`, `5161`, `5162`, `5163`, `5201`, `5202`, `5203`, `5204`, `5205`, `5206`, `5207`, `5501`, `5502`, `5503`, `6000`, `6001`, `6002`, `6003`, `6004`, `6005`, `6006`, `6007`, `6008`, `6009`, `6010`, `6011`, `6012`, `6013`, `6014`, `6015`, `6016`, `6017`, `6018`, `6019`, `6020`, `6021`, `6022`, `6023`, `6024`, `6025`, `6026`, `6027`, `6028`, `6029`, `6030`, `6031`, `6032`, `6033`, `6034`, `6035`, `6036`, `6037`, `6038`, `6039`, `6040`, `6041`, `6042`, `6043`, `6044`, `6045`, `6046`, `6047`, `6048`, `6049`, `6050`, `6051`, `6052`, `6053`, `6054`, `6055`, `6056`, `6057`, `6058`, `6059`, `6060`, `6061`, `6062`, `6063`, `6064`, `6065`, `6066`, `6067`, `6068`, `6069`, `6070`, `6071`, `6072`, `6073`, `6074`, `6075`, `6076`, `6077`, `6078`, `6079`, `6080`, `6081`, `6082`, `6083`, `6084`, `6085`, `6086`, `6087`, `6088`, `6089`, `6090`, `6091`, `6092`, `6093`, `6094`, `6095`, `6096`, `6097`, `6098`, `6099`, `6100`, `6101`, `6102`, `6103`, `6104`, `6105`, `6106`, `6107`, `6108`, `6109`, `7000`, `7001`, `7002`, `7003`, `7004`, `7005`, `9901`, `9902`, `9903`, `9904`, `9905`, `9906`, `9907`, `9908`, `9909`, `-1`] |
| **from** | query | **Date** (date-time) | The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **to** | query | **Date** (date-time) | The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`. | [optional] [example: `2024-01-15T10:30:00Z`] |
| **count** | query | **Integer** (int32) | How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has to ask for them. | [optional] [example: `1`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many events to skip before the page begins, counting from the newest. It is applied to the log before the filters, so a page can hold fewer events than `count` while older matches still exist. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Login events matching the filters, newest first, or the twenty most recent events when the portal has no audit option | [**LoginEventArrayWrapper**](../api.md#model-logineventarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The login history and audit trail section is not enabled for this portal | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LoginEventArrayWrapper**](../api.md#model-logineventarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
