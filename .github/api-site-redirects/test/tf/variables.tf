variable "create_function" {
  description = "Whether to create the Lambda function and associated resources"
  type        = bool
  default     = true
}

variable "region" {
  description = "AWS region (N. Virginia)"
  default     = "us-east-1"
}

variable "lambda_name" {
  description = "Lambda function name"
  default     = "api-site-redirects-test"
}
