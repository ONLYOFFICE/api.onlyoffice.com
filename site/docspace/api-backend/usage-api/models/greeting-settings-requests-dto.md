# GreetingSettingsRequestsDto
The greeting caption the portal shows its users.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The caption to store, which is kept as the portal name. An empty value clears the greeting and returns the portal to the built-in default caption. On a cloud portal with a free or trial plan the text is also matched against the character rule configured for the installation and a text that breaks it is refused, while a paid cloud plan and a self-hosted installation apply no such check. | [required] [example: `Welcome to Our Portal`] [minLength: 0] [maxLength: 255] [nullable] |
