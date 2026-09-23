# deleteThirdParty

Referenced types are defined in the [full reference](../files.md).

> StringWrapper deleteThirdParty(providerId)

`DELETE /api/2.0/files/thirdparty/{providerId}`

Remove a third-party account

Disconnects a third-party storage account from the portal and returns the ID of the folder that stood for it, in the `provider-accountId` form the Files operations use for third-party entries. Take `providerId` from `GET api/2.0/files/thirdparty`: it is the numeric account ID, not that composed folder ID. The member who connected the account can remove it; another member's request is refused unless they hold delete rights on the folder it stands for. Nothing is deleted at the storage service: the files stay with the provider, and what goes away is the portal's link to them together with the stored credentials, the sharing records and the tags kept for its entries. A room that was created on this account stops being available. When the account being removed is the one connected for backups by `POST api/2.0/files/thirdparty/backup`, its backup schedule is deleted as well. The removal cannot be repeated: once the account is gone the same ID is refused rather than confirmed, so treat the first successful answer as the record of it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **providerId** | path | **Integer** (int32) | The ID of the connected third-party storage account, as `providerId` of `GET api/2.0/files/thirdparty`. | [required] [example: `12`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The ID of the folder that stood for the removed account | [**StringWrapper**](../files.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../files.md#model-stringwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
