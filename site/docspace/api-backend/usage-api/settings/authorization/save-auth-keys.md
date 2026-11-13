# saveAuthKeys

> BooleanWrapper saveAuthKeys(SaveAuthKeysRequestDto)

`POST /api/2.0/settings/authservice`

Save the authorization keys

Saves the keys of one third-party provider, or clears them if every value is empty. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. It also returns 403 for an unknown provider, or one whose keys you cannot set. The call returns 402 if the installation hides third-party authorization. It also returns 402 for a paid provider that the plan lacks, except on a Standalone installation. The call changes data. You can repeat it with the same body. It returns true if any key changed, and false if all keys were the same. Clearing the keys always returns true. If the provider rejects the keys, the call clears all its keys and returns 400. It also returns 400 if `name` or `props` is missing. A key with no name, no value, or a too long value also returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SaveAuthKeysRequestDto** | body | [**SaveAuthKeysRequestDto**](../../models/save-auth-keys-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the provider's keys actually changed | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `name` or `props`, a key has no `name` or `value` or a `value` longer than 4000 characters, or the submitted keys failed the provider's own validation | - | - |
| **402** | The provider is a paid option not covered by the portal's current pricing plan | - | - |
| **403** | The caller has no portal-settings right, or the provider is unknown or its keys cannot be set | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
