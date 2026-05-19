//R53
output "r53_api_cf_fqdn" {
  value = { for k, v in aws_route53_record.api_cf : k => v.fqdn }
}

//S3
output "api_site_origin_bucket" {
  value       = var.api_site_s3_bucket_name
  description = "S3 bucket deployed as CloudFront origin on last apply."
}

//Cloudfront

output "cloudfront_distribution_id" {
  value = {
    for k, v in module.cdn : k => v.cloudfront_distribution_id
  }
  description = "The identifier for the distribution."
}

output "cloudfront_distribution_arn" {
  value = {
    for k, v in module.cdn : k => v.cloudfront_distribution_arn
  }
  description = "The ARN (Amazon Resource Name) for the distribution."
}

output "cloudfront_distribution_domain_name" {
  value = {
    for k, v in module.cdn : k => v.cloudfront_distribution_domain_name
  }
  description = "The domain name corresponding to the distribution."
}

output "cloudfront_distribution_hosted_zone_id" {
  value = {
    for k, v in module.cdn : k => v.cloudfront_distribution_hosted_zone_id
  }
  description = "The CloudFront Route 53 zone ID that can be used to route an Alias Resource Record Set to."
}
