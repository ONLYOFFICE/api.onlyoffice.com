# EmailMemberRequestDto
The request parameters for the user email.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address to send the password recovery link to. It is required and validated even by `POST api/2.0/people/guests/share/approve`, which then ignores its value and takes the account from the confirmation token instead. | [required] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **recaptchaType** | [**RecaptchaType**](recaptcha-type.md) | Which CAPTCHA the `recaptchaResponse` comes from: `Default` for the web reCAPTCHA, `AndroidV2` or `iOSV2` for the mobile ones, and `hCaptcha` when the portal is configured with hCaptcha. It matters only for an unauthenticated request on a portal that has a CAPTCHA. | [optional] [enum: `0`, `1`, `2`, `3`] |
| **recaptchaResponse** | **String** | The user's response to the CAPTCHA challenge. | [optional] [example: `03AGdBq27...`] [nullable] |
