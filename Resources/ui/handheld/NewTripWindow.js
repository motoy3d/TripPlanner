function NewTripWindow() {
    var style = require("util/style").style;
    var util = require("util/util").util;
    var self = Ti.UI.createWindow({
        backgroundColor: '#38d'
        ,top: 20
    });
    //旅行タイトル
    var tripTitle = Ti.UI.createTextField({
        value: '旅行タイトル'
        ,color: '#ccc'
        ,backgroundColor: 'white'
        ,top: 20
        ,left: 20
        ,width: 280
        ,height: 40
        ,borderRadius: 6
    });
    //開始日
    var startDate = Ti.UI.createTextField({
        value: '2014/12/29'
        ,color: '#ccc'
        ,backgroundColor: 'white'
        ,top: 80
        ,left: 20
        ,width: 150
        ,height: 40
        ,focusable: false
        ,borderRadius: 6
    });
    //終了日
    var endDate = Ti.UI.createTextField({
        value: '2014/12/29'
        ,color: '#ccc'
        ,backgroundColor: 'white'
        ,top: 140
        ,left: 20
        ,width: 150
        ,height: 40
        ,focusable: false
        ,borderRadius: 6
    });
    //メモ
    var memoTextArea = Ti.UI.createTextArea({
        value: 'メモ'
        ,color: '#ccc'
        ,backgroundColor: 'white'
        ,top: 200
        ,left: 20
        ,width: 280
        ,height: 100
        ,borderRadius: 6
    });
    //テーマカラー
    var color1 = Ti.UI.createButton({
        backgroundColor: 'blue'
        ,borderRadius: 10
        ,top: 320
        ,left: 20
        ,width: 50
        ,height: 50
    });
    var color2 = Ti.UI.createButton({
        backgroundColor: 'green'
        ,borderRadius: 10
        ,top: 320
        ,left: 90
        ,width: 50
        ,height: 50
    });
    var color3 = Ti.UI.createButton({
        backgroundColor: 'red'
        ,borderRadius: 10
        ,top: 320
        ,left: 160
        ,width: 50
        ,height: 50
    });
    var color4 = Ti.UI.createButton({
        backgroundColor: 'yellow'
        ,borderRadius: 10
        ,top: 320
        ,left: 230
        ,width: 50
        ,height: 50
    });
    
    //作成ボタン
    var createBtn = Ti.UI.createButton({
        title: '作成'
        ,backgroundColor: '#eee'
        ,borderRadius: 10
        ,top: 400
        ,left: 20
        ,width: 150
        ,height: 50
    });
    //キャンセルボタン
    var cancelBtn = Ti.UI.createButton({
        title: 'キャンセル'
        ,backgroundColor: '#aaa'
        ,borderRadius: 10
        ,top: 400
        ,left: 200
        ,width: 100
        ,height: 50
    });
    cancelBtn.addEventListener('click', function(){
        self.close();
    });

    self.add(tripTitle);
    self.add(startDate);
    self.add(endDate);
    self.add(memoTextArea);
    self.add(color1);
    self.add(color2);
    self.add(color3);
    self.add(color4);
    self.add(createBtn);
    self.add(cancelBtn);
	return self;
};
module.exports = NewTripWindow;



/*
日付選択
    var startDate = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE
        ,minDate: new Date(2014,12,1)
        ,maxDate: new Date(2014,12,31)
        ,value: new Date()
        ,top: 80
        ,height: 40
    });
*/