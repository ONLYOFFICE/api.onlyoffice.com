# AiByokProvider

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | BYOK provider id, passed as `provider` when setting a BYOK key. | [required] |
| **name** | **String** | Provider display name. | [required] |
| **image** | **String** | SVG markup of the logo of the provider's models' owner. | [optional] |
| **models** | [**List**](ai-byok-model.md) | Models that can be called through this provider with the portal's own key. | [required] |
