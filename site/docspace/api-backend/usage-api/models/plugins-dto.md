# PluginsDto
What the installation allows to be done with web plugins.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether web plugins run on this portal at all. While it is `false` the operations under `api/2.0/settings/webplugins` are of no use, whatever the other two flags say. All three are `false` unless the installation switched plugins on in its configuration. | [optional] [example: `true`] |
| **upload** | **Boolean** | Whether an administrator may add a plugin of their own through `POST api/2.0/settings/webplugins`. While it is `false` only the plugins that ship with the installation are available. | [optional] [example: `true`] |
| **delete** | **Boolean** | Whether an added plugin may be removed again through `DELETE api/2.0/settings/webplugins/{name}`. The plugins that ship with the installation cannot be removed regardless of this flag. | [optional] [example: `true`] |
