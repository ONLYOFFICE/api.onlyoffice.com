//----- ACM certificate
data "aws_acm_certificate" "teamlab_info" {
  domain   = "*.teamlab.info"
  statuses = ["ISSUED"]
}

//----- Route 53
data "aws_route53_zone" "teamlab_info" {
  name = "teamlab.info."
}

//----- CloudFront managed policies
data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_origin_request_policy" "api2_etag_headers" {
  name = "api2-etag-headers"
}

//----- CloudFront custom response headers policies
data "aws_cloudfront_response_headers_policy" "api_site" {
  name = "api-site"
}

//----- Lambda (managed outside of this state, planned to be replaced by api-site-redirects-test)
data "aws_lambda_function" "append_index_html" {
  function_name = "AppendIndexHtml"
}

