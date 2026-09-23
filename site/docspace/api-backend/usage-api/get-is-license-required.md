# getIsLicenseRequired

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper getIsLicenseRequired()

`GET /api/2.0/settings/license/required`

Check if a license is required

Reports whether this installation still has to be given a license file before it can be used, which is the question the setup wizard asks before offering its license upload step. No authentication is needed, so it can be called on a portal nobody has signed in to yet, and the call is read-only. The answer is `true` only for a self-hosted Enterprise build whose license file is not on disk yet; an open-source or SaaS portal, a portal configured to let anyone in without an account, an installation whose configuration hides the pricing section, and one that takes its setup from cloud-image metadata all answer `false`. A `false` answer therefore does not mean the portal is licensed - it also covers every build that needs no license at all. Nothing here describes a license already in place, neither its due date nor whether the editing service still accepts it, and the answer turns to `false` only once a staged file has been activated by `POST api/2.0/settings/license/accept`, not when it is uploaded. The operation stays reachable while the portal is unpaid.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when this Enterprise installation still needs a license file, `false` when one is already active or the build needs none | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
