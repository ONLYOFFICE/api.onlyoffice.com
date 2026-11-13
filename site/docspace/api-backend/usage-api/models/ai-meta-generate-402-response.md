# aiMetaGenerate 402 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | **String** | Short reason, ready to be shown to the caller. | [required] [example: `The model provider refused the request for lack of credit`] |
| **code** | **String** | Stable classification of the failure: `rate_limit`, `insufficient_funds`, `auth`, `model_not_found`, `timeout`, `network`, `bad_request`, `server`, `unknown`, or a provider-specific code relayed as it came. | [required] [example: `insufficient_funds`] |
| **providerMessage** | **String** | The provider's own error message, cut to 500 characters. Absent when the failure never reached the provider, or was a timeout. | [optional] [example: `402 Insufficient Balance`] |
