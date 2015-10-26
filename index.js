var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');
var AWS = require('aws-sdk');
var config = require('./config.js');

var s3 = new AWS.S3();

exports.handler = function(event, context) {
	return_data = {};
	if (event.html) {

		var output_filename = Math.random().toString(36).slice(2) + '.pdf';
		var output = '/tmp/' + output_filename;

		writeStream = fs.createWriteStream(output);

		wkhtmltopdf(event.html, function(code, signal) {

			s3.putObject({
				Bucket : dstBucket,
				Key : output_filename,
				Body : fs.createReadStream(output),
				ContentType : "application/pdf"
			}, function(error, data) {

				if (error != null) {
					console.log("error: " + error);
				} else {
					console.log('upload done...');
				}
				return_data = {
					filename : output_filename
				};
				// context.succeed("File has been uploaded");
				context.done(null, return_data);
			});

		}).pipe(writeStream);
	} else {
		console.log('error');
		context.done('unable to get the html', {});
	}

};