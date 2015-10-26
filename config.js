dstBucket = 'your-s3-bucket-name';

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

module.exports = function() {
};