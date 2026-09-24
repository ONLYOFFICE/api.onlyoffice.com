# AdminMessageSettingsRequestsDto
The message sent to the portal administrators, with the CAPTCHA proof that a person wrote it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** | What the sender wants to tell the portal administrators. Markup is stripped before the letter is written, so a body that carries nothing but markup counts as empty and is refused with 400. | [required] [example: `Hello, this is a test message from the administrator.`] [minLength: 0] [maxLength: 255] [nullable] |
| **email** | **String** (email) | The address the sender can be answered at, which the letter is signed with. It has to be a well-formed email address. | [required] [example: `user@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **culture** | **String** | The language the letter is written in, as a culture name such as `en-US`. A culture the installation does not have falls back to the portal language rather than failing the call. | [optional] [example: `en-US`] [nullable] |
| **recaptchaType** | [**RecaptchaType**](recaptcha-type.md) | Which CAPTCHA service the proof in `recaptchaResponse` came from. It has to match the service the installation is configured with, which `GET api/2.0/capabilities` reports; the default value means the installation is left to decide. | [optional] [enum: `0`, `1`, `2`, `3`] |
| **recaptchaResponse** | **String** | The token the CAPTCHA widget produced in the browser, passed on unchanged for the portal to verify with the CAPTCHA service. It is single-use and short-lived, so it cannot be reused for a second message. | [optional] [example: `03AGdBq24PBCbwiDRaS...`] [nullable] |
