# AiByokKey

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Model revision id the key is set for, used in the path when replacing or deleting it. | [required] |
| **name** | **String** | Model display name; absent when the model is no longer in the gateway catalogue. | [optional] |
| **provider** | **String** | BYOK provider id the key belongs to, e.g. `anthropic`. | [required] |
| **image** | **String** | SVG markup of the logo of the model's owner. | [optional] |
