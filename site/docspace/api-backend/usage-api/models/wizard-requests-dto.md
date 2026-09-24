# WizardRequestsDto
What the initial setup wizard needs to finish a new portal: the owner credentials and the portal locale.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address the portal owner account is created with, which is also the address every administrative letter goes to afterwards. It has to be a well-formed email address; a malformed one leaves the wizard unfinished. | [required] [example: `user@example.com`] [nullable] |
| **passwordHash** | **String** | The owner password, already hashed in the client rather than sent in the clear. Hash it with the `salt`, iteration count and hash size that `GET api/2.0/settings?withpassword=true` publishes, so the portal can recognise it later; an empty value leaves the wizard unfinished. | [required] [example: `2DYmIoA/aYKEksFocEf6uw==`] [nullable] |
| **lng** | **String** | The portal interface language, as a culture name such as `en-US`. It has to be one of the cultures enabled for the installation, and an unknown one leaves the shipped default in place instead of failing the wizard. | [optional] [example: `en-US`] [nullable] |
| **timeZone** | **String** | The time zone every portal date is rendered in, as an IANA identifier such as `Europe/Riga`. A value that matches nothing falls back to UTC rather than failing the wizard. | [optional] [example: `UTC`] [nullable] |
| **amiId** | **String** | The identifier of the Amazon Machine Image the portal was launched from, for an installation started from an AWS image. It is recorded for the installation record only and changes nothing about the portal; leave it out anywhere else. | [optional] [example: `00000000-0000-0000-0000-000000000001`] [nullable] |
| **subscribeFromSite** | **Boolean** | Whether the owner agrees to receive product news at the address in `email`. It is a mailing consent and has no bearing on the portal notifications, which are subscribed separately. | [optional] [example: `true`] |
