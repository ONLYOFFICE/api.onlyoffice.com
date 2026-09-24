# WebPluginRequests
The state the portal keeps for an installed web plugin: whether it runs, and its own settings blob.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether the plugin runs in this portal. Switching it on adds the domains its manifest declares to the portal Content Security Policy and switching it off takes them away again; connected clients are told of the new state without a reload. | [optional] [example: `true`] |
| **settings** | **String** | The configuration the plugin reads at run time, as a JSON document serialised into a string. Its shape is defined by the plugin and not by the portal, which stores it encrypted for this portal alone. It replaces whatever was stored rather than merging into it, so send `{}` when there is nothing to keep. | [required] [example: `{"theme":"dark","autoSave":true}`] [minLength: 0] [maxLength: 255] [nullable] |
