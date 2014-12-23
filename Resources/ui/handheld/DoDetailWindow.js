function PlanDetailWindow() {
    var style = require("util/style").style;
    var util = require("util/util").util;
    var self = Ti.UI.createWindow({
        title: 'Boots & Kimos'
        ,backgroundColor: '#cef'
    });
    //日付
    var date = Ti.UI.createTextField({
        value: '2014/12/29'
        ,backgroundColor: 'white'
        ,focusable: false
        ,borderRadius: 6
        ,top: 15
        ,left: 20
        ,width: 110
        ,height: 40
        ,focusable: false
    });
    //時刻
    var time = Ti.UI.createTextField({
        value: '12:00'
        ,backgroundColor: 'white'
        ,focusable: false
        ,borderRadius: 6
        ,top: 15
        ,left: 200
        ,width: 60
        ,height: 40
        ,focusable: false
    });
    //行くとこ
    var doTitle = Ti.UI.createTextField({
        value: ''
        ,color: '#ccc'
        ,backgroundColor: 'white'
        ,top: 20
        ,left: 20
        ,width: 280
        ,height: 40
        ,borderRadius: 6
    });

    self.add(date);
    self.add(time);
	return self;
};
module.exports = PlanDetailWindow;
