# aws-lambda-wkhtmltopdf
Convert HTML to PDF using Webkit (QtWebKit) on AWS Lambda

## Input

```json
{
    "html" : "<!DOCTYPE html><html><body>Hello world</body></html>"
}
```

## Output

```json
{
    "filename": "8rqj9td0pvjf9a4i.pdf"
}
```

## Configuration

1. Open `config.js` and set `dstBucket` variable to name of S3 bucket where you want function to save output PDF files.
2. Make sure AWS Lambda function has `PutObject` access to S3 bucket
