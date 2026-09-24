# MobileRequestsDto
The phone number a user going through phone activation registers for SMS codes.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **mobilePhone** | **String** | The number the SMS codes are sent to, in international form with the leading `+` and no spaces. It is stored as not yet activated and only becomes the confirmed number once a code sent to it is accepted; an already activated number is not replaced this way and has to be erased first. | [optional] [example: `+1234567890`] [nullable] |
