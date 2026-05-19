module "lambda_function" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "~> 8.0"

  create      = var.create_function
  create_role = false

  lambda_at_edge = true
  publish        = true

  memory_size = 128
  timeout     = 5

  function_name = var.lambda_name
  description   = "Managed by Terraform"
  handler       = "lambda_function.lambda_handler"
  runtime       = "python3.13"
  architectures = ["x86_64"]
  package_type  = "Zip"
  lambda_role   = try(aws_iam_role.lambda[0].arn, "")

  create_package               = true
  source_path                  = "../src"
  trigger_on_package_timestamp = false

  store_on_s3 = true
  s3_bucket   = "sam-terraform-lambda-builds"
  s3_prefix   = var.lambda_name
}
