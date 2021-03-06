define(function(require, exports, module) {

	var html5video = require("html5video_pc");
	var pointbox;
	var a = html5video.videoplayer({
		logo: 'html5video',
		url: ['video/stronger.mp4'],
		width: "950",
		height: "480",
		isControl: true,
		loop: false,
		autoplay: false,
		isrightmenu: false,
		isFullscreen: false,
		isrecord: false,
		isSetPoint: true,
		isTextTrack: false,
		editTextTrack: false,
		textLanguage: "cn",
		textTracks: function() {
			return {
				cn: ['0:00|0:50|中文字幕1 测试', '0:50|1:00|<a href="#" target="_blank">广告测试</a> 测试字幕内容，也可以是广告.', '1:50|2:00|中文字幕2 测试'],
				en: ['0:00|0:50|test1 test', '0:50|1:00|<a href="#" target="_blank">AD test</a> adadfasdfas,asdfasdf.', '1:50|2:00|test2 test']
			};
		},
		isSkipMovie: false,
		skipMovie: function() {
			return '0:00|0:50';
		},
		onscreenin_event: function(data) {
			console.log(data)
		},
		onscreenout_event: function(data) {
			console.log(data)
		},
		onfullscreen_event: function(data) {
			console.log(data)
		},
		onmuted_event: function(data) {
			console.log(data)
		},
		onerror_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		oncanplay_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onloadedmetadata_event: function(data, e) {
			console.log(data)
			console.log(e)
			//打节点编辑
			if (this.isSetPoint) {
				pointbox = html5video.videoPoint({
					debug: false,
					info: ".pointinfo",
					pointParent: ".videopoint",
					pointCanvas: ".videopoint_box",
					createPoint: ".video_creatpoints",
					controlParent: ".editpoint_control",
					pointCls: ".pointsbox",
					startPoint: ".video_startpoint",
					endPoint: ".video_endpoint",
					savePoint: ".video_pointsave",
					cancelPoint: ".video_pointcancel",
					videobox: a
				});
			}
			jQuery.each(["forward", "fallback", "forward_fast", "fallback_fast"], function(i, name) {
				jQuery('.' + name).click(function(e) {
					e.preventDefault();
					a[name]();
				});
			});

		},
		ontimeupdate_event: function(data, e) {
			console.log(data)
			console.log(e)
			if (pointbox) {
				pointbox.timeupdate(data);
			}
		},
		onplaying_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onpause_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onloadstart_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onended_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onstalled_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onwaiting_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onprogress_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onloadeddata_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		ondurationchange_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onsuspend_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onseeking_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onseeked_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		oncanplaythrough_event: function(data, e) {
			console.log(data)
			console.log(e)
		},
		onabort_event: function(data, e) {
			console.log(data)
			console.log(e)
		}
	});

});
