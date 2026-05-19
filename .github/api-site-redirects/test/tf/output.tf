output "lambda_function_arn" {
  description = "The ARN of the Lambda Function"
  value       = module.lambda_function.lambda_function_arn
}

output "lambda_function_qualified_arn" {
  description = "The ARN of the Lambda Function version (required for CloudFront)"
  value       = module.lambda_function.lambda_function_qualified_arn
}

output "lambda_function_version" {
  description = "The latest published version of the Lambda Function"
  value       = module.lambda_function.lambda_function_version
}

output "lambda_role_arn" {
  description = "The ARN of the IAM role"
  value       = var.create_function ? aws_iam_role.lambda[0].arn : ""
}
