locals {
  api_site_redirects_test_qualified_arn = data.terraform_remote_state.api_site_redirects_test.outputs.lambda_function_qualified_arn

  cf_api_origin_id          = "api-site-teamlab-info"
  cf_api_alternate_domain   = ["api.teamlab.info"]
  cf_api_s3_bucket_name     = var.api_site_s3_bucket_name
  cf_api_s3_regional_domain = "${var.api_site_s3_bucket_name}.s3.us-east-1.amazonaws.com"

  #------
  cdn = {
    api = {
      create              = true //Controls if CloudFront distribution should be created
      aliases             = local.cf_api_alternate_domain
      enabled             = true             //Whether the distribution is enabled to accept end user requests for content.
      is_ipv6_enabled     = true             //Whether the IPv6 is enabled for the distribution.
      http_version        = "http2and3"      //The maximum HTTP version to support on the distribution.
      price_class         = "PriceClass_All" //The price class for this distribution. One of PriceClass_All, PriceClass_200, PriceClass_100
      retain_on_delete    = false            //Disables the distribution instead of deleting it when destroying the resource through Terraform.
      wait_for_deployment = true             //If enabled, the resource will wait for the distribution status to change from InProgress to Deployed.
      origin_access_control = {
        (local.cf_api_origin_id) = {
          description      = "Origin Access Control for ${local.cf_api_origin_id}"
          origin_type      = "s3"
          signing_behavior = "always"
          signing_protocol = "sigv4"
        }
      } //Map of CloudFront origin access control

      origin = {
        api_s3 = {
          origin_id                 = local.cf_api_origin_id
          domain_name               = local.cf_api_s3_regional_domain
          origin_access_control_key = local.cf_api_origin_id
        }
      } //One or more origins for this distribution.

      default_cache_behavior = {
        target_origin_id         = local.cf_api_origin_id
        viewer_protocol_policy   = "redirect-to-https"
        allowed_methods          = ["GET", "HEAD"]
        cached_methods           = ["GET", "HEAD"]
        compress                 = true
        cache_policy_id          = data.aws_cloudfront_cache_policy.caching_optimized.id
        origin_request_policy_id = data.aws_cloudfront_origin_request_policy.api2_etag_headers.id
        lambda_function_association = {
          origin-request = {
            lambda_arn   = "${data.aws_lambda_function.append_index_html.arn}:1"
            include_body = false
          }
          viewer-request = {
            lambda_arn   = local.api_site_redirects_test_qualified_arn
            include_body = false
          }
        }
      } //The default cache behavior for this distribution

      ordered_cache_behavior = [
        {
          path_pattern               = "/playground/plugin/config.json"
          target_origin_id           = local.cf_api_origin_id
          viewer_protocol_policy     = "redirect-to-https"
          allowed_methods            = ["GET", "HEAD"]
          cached_methods             = ["GET", "HEAD"]
          compress                   = true
          cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
          origin_request_policy_id   = data.aws_cloudfront_origin_request_policy.api2_etag_headers.id
          response_headers_policy_id = data.aws_cloudfront_response_headers_policy.api_site.id
        }
      ]

      custom_error_response = [
        {
          error_code            = 403
          response_code         = 200
          response_page_path    = "/404.html"
          error_caching_min_ttl = 10
        },
        {
          error_code            = 404
          response_code         = 200
          response_page_path    = "/404.html"
          error_caching_min_ttl = 10
        }
      ]

      viewer_certificate = {
        acm_certificate_arn      = data.aws_acm_certificate.teamlab_info.arn
        minimum_protocol_version = "TLSv1.2_2021"
        ssl_support_method       = "sni-only"
      } //The SSL configuration for this distribution

      tags = merge(var.common_tags,
        {
          billing = "site-test"
          Anomaly = "EWVWPX9OBK5O9"
        }
      ) //A map of tags to assign to the resource.
    }
  }
}
