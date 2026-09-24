# CoEditingConfig
How co-editing is preset when the document opens, and whether the user may switch it afterwards.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **change** | **Boolean** | Whether the user may switch between the two co-editing modes from the editor interface, or is held to the one the portal preset. | [optional] [example: `true`] |
| **fast** | **Boolean** | Whether other participants see each change as it is typed. Left off, changes are exchanged only when a participant saves, and the paragraph being edited is locked for the others meanwhile. | [optional] [example: `false`] |
| **mode** | [**CoEditingConfigMode**](co-editing-config-mode.md) | The mode the two settings above amount to, as the editors name it. | [optional] [enum: `0`, `1`] |
