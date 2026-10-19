# FormsItemDto
One field of a form, offered as a filter over the copies gathered in a form-filling room.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **key** | **String** | The name of the field as it is written in the form; send it back as `formsItemKey` to keep only             the completed copies whose field of that name holds a value.             &lt;example>first_name&lt;/example> | [optional] [nullable] |
| **type** | **String** | The kind of value the field holds, a text box or a checkbox for instance; send it back as             `formsItemType` beside the key.             &lt;example>text&lt;/example> | [optional] [nullable] |
