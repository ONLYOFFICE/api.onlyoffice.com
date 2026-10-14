# TenantQuotaFeatureDto
One feature a quota switches on, with the limit it grants and how much of that limit is used.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The stable key of the feature - `total_size`, `manager`, `room`, `backup` and so on. It is the value to branch on, since `title` is prose in the portal language. | [optional] [example: `total_size`] [nullable] |
| **title** | **String** | The feature described in the portal language, with its limit already substituted into the sentence, so it can be printed as it is. It is empty when this build ships no wording for the feature. | [optional] [example: `Premium Storage`] [nullable] |
| **image** | **String** | The feature's icon as SVG markup to render inline - not a URL to fetch. It is filled in only when the quota comes from the catalogue, and left empty on the quota the portal is actually on, on a feature that this quota switches off, and on a feature that ships no icon. | [optional] [example: `<svg viewBox="0 0 24 24"><path d="..."/></svg>`] [nullable] |
| **value** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **type** | **String** | How to read `value` and `used`: `size` for bytes, `count` for a number of things, `flag` for a feature that is merely on or off. | [optional] [example: `size`] [nullable] |
| **used** | [**FeatureUsedDto**](feature-used-dto.md) | How much of the limit is already used. It is present only on the quota the portal is actually on, and only for a feature whose consumption is counted; a guest is shown none of these figures and a plain member only the one for total size, so an absent value can mean the caller may not see it rather than that nothing is used. | [optional] |
| **priceTitle** | **String** | What the feature is charged as, in the portal language - for instance the per-unit price of an add-on. It is filled in only for a feature that costs money on top of the plan. | [optional] [example: `$9.99/month`] [nullable] |
