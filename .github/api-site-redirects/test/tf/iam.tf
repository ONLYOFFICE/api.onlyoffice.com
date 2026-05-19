resource "aws_iam_policy" "logs" {
  count = var.create_function ? 1 : 0

  name_prefix = "Logs-${var.lambda_name}"

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "DenyLogs",
        "Effect" : "Deny",
        "Action" : [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "cloudwatch:PutMetricData"
        ],
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iam_role" "lambda" {
  count = var.create_function ? 1 : 0

  name_prefix = "${var.lambda_name}-Role"

  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : {
          "Service" : [
            "lambda.amazonaws.com",
            "edgelambda.amazonaws.com"
          ]
        },
        "Action" : "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "logs" {
  count = var.create_function ? 1 : 0

  role       = aws_iam_role.lambda[0].name
  policy_arn = aws_iam_policy.logs[0].arn
}
