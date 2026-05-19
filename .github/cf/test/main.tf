module "cdn" {
  source  = "terraform-aws-modules/cloudfront/aws"
  version = "~> 6.0"

  for_each = { for k, v in local.cdn : k => v if v.create }

  create = try(each.value.create, true)

  aliases                         = try(each.value.aliases, null)
  anycast_ip_list_id              = try(each.value.anycast_ip_list_id, null)
  cloudfront_functions            = try(each.value.cloudfront_functions, null)
  comment                         = try(each.value.comment, null)
  continuous_deployment_policy_id = try(each.value.continuous_deployment_policy_id, null)
  create_monitoring_subscription  = try(each.value.create_monitoring_subscription, false)
  custom_error_response           = try(each.value.custom_error_response, null)
  default_cache_behavior          = try(each.value.default_cache_behavior)
  default_root_object             = try(each.value.default_root_object, null)
  enabled                         = try(each.value.enabled, true)
  http_version                    = try(each.value.http_version, "http2")
  is_ipv6_enabled                 = try(each.value.is_ipv6_enabled, true)
  logging_config                  = try(each.value.logging_config, null)
  ordered_cache_behavior          = try(each.value.ordered_cache_behavior, null)
  origin                          = try(each.value.origin, {})
  origin_access_control = try(each.value.origin_access_control, {
    s3 = {
      origin_type      = "s3",
      signing_behavior = "always",
      signing_protocol = "sigv4"
    }
  })
  origin_group                         = try(each.value.origin_group, null)
  price_class                          = try(each.value.price_class, null)
  realtime_metrics_subscription_status = try(each.value.realtime_metrics_subscription_status, "Enabled")
  response_headers_policies            = try(each.value.response_headers_policies, null)
  restrictions = try(each.value.restrictions, {
    geo_restriction = {
      restriction_type = "none"
    }
  })
  retain_on_delete    = try(each.value.retain_on_delete, null)
  staging             = try(each.value.staging, null)
  tags                = try(each.value.tags, {})
  viewer_certificate  = try(each.value.viewer_certificate, {})
  vpc_origin          = try(each.value.vpc_origin, null)
  wait_for_deployment = try(each.value.wait_for_deployment, null)
  web_acl_id          = try(each.value.web_acl_id, null)
}
