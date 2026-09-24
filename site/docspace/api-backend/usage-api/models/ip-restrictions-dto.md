# IpRestrictionsDto
The addresses allowed to reach the portal, and whether the restriction is enforced.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **ipRestrictions** | [**List**](ip-restriction-base.md) | The allowed addresses, each entry pairing a single IPv4 or IPv6 address with the flag that limits it to administrators. This is the whole list that is to hold afterwards: entries not repeated here are deleted. Ranges written as `from-to` and CIDR blocks are refused with 400, even though the portal matches such forms when they are already stored. Enforcement spares only the portal owner and the installation own networks, so a list without the caller address locks the remaining administrators out. | [required] [example: `[{ip=192.0.2.1, forAdmin=false}]`] [nullable] |
| **enable** | **Boolean** | Whether the list is enforced. Leaving it out follows the list - on when addresses are sent, off when the list is empty - and sending `true` with an empty list is refused with 400, since that would admit nobody. | [optional] [example: `true`] [nullable] |
