//R53
resource "aws_route53_record" "api_cf" {
  for_each = toset(local.cf_api_alternate_domain)

  zone_id = data.aws_route53_zone.teamlab_info.zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = module.cdn["api"].cloudfront_distribution_domain_name
    zone_id                = module.cdn["api"].cloudfront_distribution_hosted_zone_id
    evaluate_target_health = false
  }
}

//S3
resource "aws_s3_bucket_policy" "api_site_1" {
  bucket = "api-site-teamlab-info1"
  policy = jsonencode({
    "Version" : "2008-10-17",
    "Id" : "PolicyForCloudFrontPrivateContent",
    "Statement" : [
      {
        "Sid" : "AllowCloudFrontServicePrincipal",
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "cloudfront.amazonaws.com"
        },
        "Action" : "s3:GetObject",
        "Resource" : "arn:aws:s3:::api-site-teamlab-info1/*",
        "Condition" : {
          "StringEquals" : {
            "AWS:SourceArn" : "arn:aws:cloudfront::997789372772:distribution/${module.cdn["api"].cloudfront_distribution_id}"
          }
        }
      }
    ]
  })
}

resource "aws_s3_bucket_policy" "api_site_2" {
  bucket = "api-site-teamlab-info2"
  policy = jsonencode({
    "Version" : "2008-10-17",
    "Id" : "PolicyForCloudFrontPrivateContent",
    "Statement" : [
      {
        "Sid" : "AllowCloudFrontServicePrincipal",
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "cloudfront.amazonaws.com"
        },
        "Action" : "s3:GetObject",
        "Resource" : "arn:aws:s3:::api-site-teamlab-info2/*",
        "Condition" : {
          "StringEquals" : {
            "AWS:SourceArn" : "arn:aws:cloudfront::997789372772:distribution/${module.cdn["api"].cloudfront_distribution_id}"
          }
        }
      }
    ]
  })
}
