//----- VPC
variable "region" {
  description = "Region: N. Virginia"
  default     = "us-east-1"
}

//----- S3
variable "api_site_s3_bucket_name" {
  description = "Active S3 bucket name for api.teamlab.info (passed via -var on deploy)"
  type        = string

  validation {
    condition     = contains(["api-site-teamlab-info1", "api-site-teamlab-info2"], var.api_site_s3_bucket_name)
    error_message = "Must be one of: api-site-teamlab-info1, api-site-teamlab-info2."
  }
}


//----- Tags
variable "common_tags" {
  default = {
    ExtraTag = "Managed by Terraform"
  }
}
