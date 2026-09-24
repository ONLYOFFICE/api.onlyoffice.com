# QuotaSettingsRequestsDto.defaultQuota
The starting limit, in bytes, written as a JSON number. It has to parse as a whole number and may not exceed the portal total storage quota, nor, on a self-hosted installation with a portal-wide quota switched on, that quota; anything larger is refused with 400. It is applied to objects created from now on and leaves the limits of existing ones as they are.
