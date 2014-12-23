function TripListWindow() {
    var style = require("util/style").style;
    var util = require("util/util").util;
    var NewTripWindow = require("/ui/handheld/NewTripWindow");
    var AppTabGroup = require("/ui/common/AppTabGroup");
    var self = Ti.UI.createWindow({
        title: '旅行プラン'
        ,backgroundColor: 'white'
    });
    //プラン一覧テーブル
    var tripListTable = Ti.UI.createTableView({
        width: Ti.UI.FILL
        ,height: Ti.UI.SIZE
        ,top: 0
    });
    //プラン一覧テーブルタップ時
    tripListTable.addEventListener('click', function(){
        var tabGroup = new AppTabGroup();
        Ti.UI.tabGroup = tabGroup;
        tabGroup.open();
    });
    //行
    var rows = [];
    //１行目
    var tripTitle = Ti.UI.createLabel({
        text : 'ハワイ旅行2014'
        ,color: 'black'
        ,fontSize: 25
        ,top: 5
        ,left: 5
    });
    var schedule = Ti.UI.createLabel({
        text : '2014/12/29 - 2015/1/7'
        ,color: 'gray'
        ,top: 30
        ,left: 20
    });
    var row = Ti.UI.createTableViewRow({
        height: 80
        ,width: Ti.UI.FILL
    });
    row.add(tripTitle);
    row.add(schedule);
    rows.push(row);
    //プラン追加ボタン
    var newBtn = Ti.UI.createButton({
        title : '＋ プラン追加'
        ,color: 'white'
        ,backgroundColor: '#34f'
        ,borderRadius: 8
        ,bottom: 20
        ,height : 50
        ,width : 250
    });
    //プラン追加ボタン押下時
    newBtn.addEventListener('click', function() {
        var newTripWin = new NewTripWindow();
        newTripWin.open();
    });    
    tripListTable.setData(rows);
    
    self.add(tripListTable);
    self.add(newBtn);

    //ナビゲーションウィンドウ
    var navWin = Ti.UI.iOS.createNavigationWindow({
        window: self
        ,backgroundColor: '#38d'
    });

	return navWin;
};
module.exports = TripListWindow;
