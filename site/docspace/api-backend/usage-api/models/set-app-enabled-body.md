# SetAppEnabledBody
Whether a portal application is switched on.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether the application is available in this portal. Switching it off leaves its settings document stored, so switching it back on restores the configuration it had; connected clients are told of the new state without a reload. | [optional] [example: `true`] |
