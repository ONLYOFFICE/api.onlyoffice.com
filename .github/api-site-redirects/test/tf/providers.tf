provider "aws" {
  region = var.region
}

terraform {
  backend "s3" {
    bucket       = "terraform.backend.oo"
    key          = "lambda-test/api-site-redirects-test/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }

  }

  required_version = ">= 1.5.7"
}
