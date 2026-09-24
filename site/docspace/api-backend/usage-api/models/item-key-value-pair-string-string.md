# ItemKeyValuePairStringString
One entry of a keyed collection, carried as an explicit pair of `key` and `value` fields instead of as a member of a JSON object, so that the key is not restricted to a string and the entries keep the order they are sent in.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **key** | **String** | The left half of the pair. Where the pair configures something, this is the identifier the value belongs to - a setting name, a module id, a logo slot; where the pair reports the result of a call, this is the result itself, such as the flag telling whether the call succeeded. Which of the two it is, and which keys are accepted, is stated by the operation that sends or returns the pair. | [optional] [nullable] |
| **value** | **String** | The right half of the pair: what is assigned to the key next to it, or what is reported for it. Its meaning and its accepted values follow from the key, so read them from the operation that sends or returns the pair. | [optional] [nullable] |
