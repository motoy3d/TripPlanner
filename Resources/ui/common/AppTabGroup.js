function AppTabGroup() {
	var DoListWindow = require('/ui/handheld/DoListWindow');
    var style = require("util/style").style;
    var util = require("util/util").util;
	var self = Ti.UI.createTabGroup();
	if(util.isAndroid()) {
//	    self.applyProperties(style.tabsAndroid);
	}
	
	var win1 = new DoListWindow(self)
	      ,win2 = new DoListWindow(self)
		;
	// プラン
	var tab1 = Ti.UI.createTab({
		title: util.isAndroid()? "" : "プラン"
		,icon: '/images/game.png'
		,window: win1
	});
    // 遊ぶ候補リスト
    var tab2 = Ti.UI.createTab({
        title: util.isAndroid()? "" : "遊ぶ候補リスト"
        ,icon: '/images/game.png'
        ,window: win2
        ,visible: false
    });
	
	self.addTab(tab1);
    self.addTab(tab2);
    
	return self;
};

module.exports = AppTabGroup;
