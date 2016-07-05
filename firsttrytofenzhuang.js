(function() {
	api: function(url, opts) {
		opts = $.extend({
			method: 'get',
			dataType: 'json',
			data: {},
			onError: function() {
				console.log('fangwencuowu');
			}
		}, opts);
	}

	$.ajax({
		url: url,
		method: opts['method'],
		dataType : opts['dataType'],
		data: opts['data'],
		error: function(e, opts) {
			console.log('fangwencuowu');
		},
		success: function(rs, succ) {

		};
	})
},window);