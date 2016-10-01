var wkhtmltopdf = require('wkhtmltopdf');
var MemoryStream = require('memorystream');

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

exports.handler = function(event, context) {
	var memStream = new MemoryStream();
	var html_utf8 = new Buffer(event.html_base64, 'base64').toString('utf8');
	wkhtmltopdf(html_utf8, event.options, function(code, signal) { context.done(null, { pdf_base64: memStream.read().toString('base64') }); }).pipe(memStream);	
};