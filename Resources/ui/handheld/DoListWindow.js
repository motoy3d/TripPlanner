function DoListWindow() {
    var DoDetailWindow = require('/ui/handheld/DoDetailWindow');
    var style = require("util/style").style;
    var util = require("util/util").util;
    var homeBtn = Ti.UI.createButton({
        title: 'HOME'
    });
    var self = Ti.UI.createWindow({
        title: 'ハワイ旅行 2014'
        ,backgroundColor: '#d64'
//        ,tintColor: 'red'
        ,leftNavButton: homeBtn
    });
    homeBtn.addEventListener('click', function(){
        Ti.UI.tabGroup.close();
    });
    //広告
    var adView = Ti.UI.createLabel({
        text: '広告エリア'
        ,color: '#444'
        ,textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
        ,backgroundColor: '#ccc'
        ,top: 0
        ,width: Ti.UI.FILL
        ,height: 50
    });
    //行動リスト
    var doList = Ti.UI.createTableView({
        top: 50
        ,borderColor: '#38f'
    });
    //日付セクション
    var dateSection = Ti.UI.createTableViewSection({
        headerTitle: '12/29 (月)'
    });
    var do1 = Ti.UI.createTableViewRow({
        title: ' 8:35 ホノルル着'
    });
    var do2 = Ti.UI.createTableViewRow({
        title: 'Hertzレンタカーでカイルアへ'
    });
    var do3 = Ti.UI.createTableViewRow({
        title: '12:00 Boots & Kimos'
        ,rightImage: '/images/bootsandkimos.png'
        ,height: 90
    });
    var do4 = Ti.UI.createTableViewRow({
        title: '14:30 カイルアビーチ'
        ,rightImage: '/images/kailuabeach.jpg'
        ,height: 90
    });
    //予定追加
    var addRow = Ti.UI.createTableViewRow({
        height: 60
    });
    var addBtn = Ti.UI.createButton({
        title: '＋ 予定を追加'
        ,color: 'white'
        ,textAlign: 'center'
        ,backgroundColor: 'lime'
        ,width: 150
        ,height: 40
        ,borderRadius: 8
    });
    addRow.add(addBtn);
    
    dateSection.add(do1);
    dateSection.add(do2);
    dateSection.add(do3);
    dateSection.add(do4);
    dateSection.add(addRow);
    doList.setData([dateSection]);
    
    doList.addEventListener('click', function(){
        var detailWin = new DoDetailWindow();
        Ti.UI.tabGroup.activeTab.open(detailWin, {animated: true});
    });

    self.add(adView);
    self.add(doList);
	return self;
};
module.exports = DoListWindow;
