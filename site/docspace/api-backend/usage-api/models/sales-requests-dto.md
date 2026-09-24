# SalesRequestsDto
Who is writing to the ONLYOFFICE sales team, and what about.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userName** | **String** | The name the sales team should address the reply to. It is sent as written and is not matched against any portal account; an empty value fails the request with 400. | [required] [example: `John Doe`] [minLength: 1] [maxLength: 255] |
| **email** | **String** | The address the answer is sent to. It has to be a well-formed email address and need not be the caller portal address; an empty or malformed value fails the request with 400. | [required] [example: `user@example.com`] [minLength: 1] [maxLength: 64] |
| **message** | **String** | What is being asked of the sales team - a quote, an invoice, or a plan that cannot be bought online. An empty value fails the request with 400. | [required] [example: `I would like to inquire about pricing`] [minLength: 1] [maxLength: 255] |
