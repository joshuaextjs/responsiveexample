Ext.define("app.view.example1.PanelTbarResponsive",{
    extend:"Ext.Panel",

    xtype:"paneltbarresponsive",

    title:"Panel with responsive tbar",

    initComponent: function (){

        this.tbar = {

            items:[{
                text: 'Menu users',
                iconCls: 'fa fa-bars',
                responsiveConfig: util.getResponsive({
                    text: "Menu users 1",
                    iconAlign: "top",
                    scale:"large",
                    hidden: false
                }, {
                    text: "Menu 1",
                    iconAlign: "left",
                    hidden: false,
                    scale:"medium"
                }, {
                    text: "",
                    iconAlign: "top",
                    scale:"small",
                    hidden: true
                })
            },{
                text: 'Menu users',
                iconCls: 'fa fa-bars',
                responsiveConfig: util.getResponsive({
                    text: "Menu users 2",
                    iconAlign: "top",
                    scale:"large",
                    hidden: false
                }, {
                    text: "Menu 2",
                    iconAlign: "left",
                    scale:"medium",
                    hidden: false
                }, {
                    text: "",
                    iconAlign: "top",
                    scale:"small",
                    hidden: true
                })
            },{
                xtype: 'splitbutton',
                text: 'Menu users',
                iconCls: 'fa fa-bars',
                menu:[{
                    text:'Menu 1'
                },{
                    text:'Menu 2'
                }],
                responsiveConfig: util.getResponsive({
                    text: "Menu users",
                    iconAlign: "top",
                    scale:"large",
                    hidden: true
                }, {
                    text: "Menu",
                    iconAlign: "left",
                    scale:"medium",
                    hidden: true
                }, {
                    text: "",
                    iconAlign: "top",
                    hidden: false,
                    scale:"small"
                })
            }, '->', {
                xtype: 'splitbutton',
                text: 'Cut',
                iconCls: 'fa fa-cut',
                menu: [{
                    text:'Cut Menu Item'
                }],
                responsiveConfig: util.getResponsive({
                    text: "Cut user",
                    iconAlign: "top",
                    scale:"large"
                }, {
                    text: "Cut",
                    iconAlign: "left",
                    scale:"medium"
                }, {
                    text: "",
                    iconAlign: "top",
                    scale:"small"
                })
            }, {
                iconCls: 'fa fa-copy',
                text:'Copy',
                responsiveConfig: util.getResponsive({
                    text: "Copy user",
                    iconAlign: "top",
                    scale:"large"
                }, {
                    text: "Copy",
                    iconAlign: "left",
                    scale:"medium"
                }, {
                    text: "",
                    iconAlign: "top",
                    scale:"small"
                })
            }, {
                text: 'Paste',
                iconCls: 'fa fa-paste',
                menu:[{
                    text:'Paste Menu Item'
                }],
                responsiveConfig: util.getResponsive({
                    text: "Paste user",
                    iconAlign: "top",
                    scale:"large"
                }, {
                    text: "Paste",
                    iconAlign: "left",
                    scale:"medium"
                }, {
                    text: "",
                    iconAlign: "top",
                    scale:"small"
                })
            }]
        };

        this.callParent();
    }
});