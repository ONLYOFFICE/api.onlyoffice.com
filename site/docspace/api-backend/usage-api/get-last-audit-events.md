# getLastAuditEvents

Referenced types are defined in the [full reference](../api.md).

> AuditEventArrayWrapper getLastAuditEvents()

`GET /api/2.0/security/audit/events/last`

Get recent audit events

Returns the twenty most recent audit events of the portal - the creations, changes, deletions, sharing and settings updates its members made - as the short summary a settings page shows before anyone asks for the full trail. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402. The operation is read-only and takes no parameters: it looks back exactly as far as the audit trail lifetime that `GET api/2.0/security/audit/settings/lifetime` reports, returns at most twenty events ordered newest first, and cannot be filtered. `date` is given in the portal time zone, `actionText` is the readable sentence describing the event with every substituted value shortened to fifty characters here, and `target` names the entity the action was applied to. An empty list means nothing was recorded inside that period. Use `GET api/2.0/security/audit/events/filter` to filter by user, module, action or period.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The twenty most recent audit events of the portal, newest first | [**AuditEventArrayWrapper**](../api.md#model-auditeventarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The login history and audit trail section is not enabled for this portal | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuditEventArrayWrapper**](../api.md#model-auditeventarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
