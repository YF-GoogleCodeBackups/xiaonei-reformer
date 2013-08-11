var extId = null;

if (chrome.runtime) {
	extId = chrome.runtime.id;
} else {
	extId = /([^\/]+)\/a$/.exec(chrome.extension.getURL("a"))[1];
}

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
	switch (request.action) {
		case "save":
			localStorage.setItem("xnr_options", request.data);
			return;
		case "load":
			var options = localStorage.getItem("xnr_options");
			if (options == null) {
				chrome.storage.sync.get(null, function(data) {
					sendResponse({options:data || {}});
				});
				return true;
			} else {
				try {
					sendResponse({options:JSON.parse(options)});
				} catch(ex) {
					sendResponse({options:{}});
				}
				return;
			}
		case "storage":
			if (request.data) {
				localStorage.setItem(request.pref,request.data);
			} else {
				sendResponse({data:localStorage.getItem(request.pref)});
			}
			return;
		case "get":
			var httpReq = new XMLHttpRequest();
			httpReq.onload = function() {
				if (httpReq.readyState == 4) {
					sendResponse({data:(httpReq.status==200?httpReq.responseText:null)});
				}
			};
			httpReq.onerror = function(e) {
				sendResponse({data:null});
			};
			httpReq.open(request.method,request.url,true);
			//httpReq.setRequestHeader("Cache-Control","no-cache");
			httpReq.send();
			return true;
		case "album":
			if (chrome.downloads) {
				request.data.dlapi = true;
			}
			chrome.permissions.contains({ permissions: ['tabs'] }, function(result) {
				if (!result) {
					if (confirm("缺少权限，*可能*无法正常打开新标签页，现在要给改造器授权吗？")) {
						chrome.tabs.create({url:chrome.extension.getURL("permissions.html")});
						return;
					}
				}
				chrome.tabs.create({url:chrome.extension.getURL("album.html")}, function(tab) {
					var tabId = tab.id;
					chrome.tabs.onUpdated.addListener(function (tid, changeInfo, tab) {
						if (tid != tabId || changeInfo.status != "complete") {
							return;
						}
						chrome.tabs.onUpdated.removeListener(arguments.callee);
						if (chrome.runtime && chrome.runtime.getPlatformInfo) {
							// Chrome 28/29+
							chrome.runtime.getPlatformInfo(function(sysinfo) {
								chrome.tabs.sendMessage(tid, { type:"initAlbum", "album":request.data, "os":sysinfo.os });
							});
						} else {
							var p = navigator.platform;
							var os;
							if (/Win/i.test(p)) {
								os = "win";
							} else if (/Mac/i.test(p)) {
								os = "mac";
							} else {
								os = p.split(" ")[0].toLowerCase();
							}
							chrome.tabs.sendMessage(tid, { type:"initAlbum", "album":request.data, "os":os });
						}
					});
				});
			});
			return;
	}
});


if (chrome.downloads) {
	chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
		if (downloadItem.byExtensionId == extId) {
			suggest({
				filename: downloadItem.filename,
				conflict_action: 'overwrite'
			});
		}
	});
}
