# SetRestrictedAiModelsRequestDto
The complete set of AI chat models that are to be barred on the portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **models** | **Set** | The identifiers of the models no user of the portal may pick, taken from `GET api/2.0/portal/payment/ai-prices`. This is the whole set that is to hold afterwards and not a list of additions: send the models already barred together with the new one to add a restriction, leave one out to lift it, and send an empty set to lift them all. | [required] [example: `[model1, model2]`] |
