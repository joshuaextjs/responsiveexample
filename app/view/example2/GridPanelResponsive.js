Ext.define("app.view.example2.GridPanelResponsive",{
    extend:"Ext.grid.Panel",

    xtype:"gridpanelresponsive",

    title:"Grid Panel with responsive columns",


    initComponent: function (){
        this.store = Ext.create("app.store.Users");
        this.columns= this.buildColumns();
        this.callParent();
    },

    buildColumns: function (){
        return [{
            header:"Name",
            dataIndex: "address",
            flex: 1,
            responsiveConfig: util.getResponsive({
                hidden: true
            }, {
                hidden: false
            }, {
                hidden: true
            }),
            renderer: function (value, meta, record){
                return record.data.firstName +" "+ record.data.lastName;
            }
        },{
            header:"First Name",
            dataIndex: "firstName",
            flex: 1,
            responsiveConfig: util.getResponsive({
                hidden: false
            }, {
                hidden: true
            }, {
                hidden: true
            }),
        },{
            header:"Last Name",
            dataIndex: "lastName",
            flex: 1,
            responsiveConfig: util.getResponsive({
                hidden: false
            }, {
                hidden: true
            }, {
                hidden: true
            }),
        },{
            header:"Company",
            dataIndex: "company",
            flex: 1,
            responsiveConfig: util.getResponsive({
                hidden: false
            }, {
                hidden: false
            }, {
                hidden: true
            }),
        },{
            header:"Addres",
            dataIndex: "address",
            flex: 1,
            responsiveConfig: util.getResponsive({
                hidden: false
            }, {
                hidden: false
            }, {
                hidden: true
            }),
        },{
            header:"Users",
            dataIndex: "address",
            flex: 1,
            responsiveConfig: util.getResponsive({
                hidden: true
            }, {
                hidden: true
            }, {
                hidden: false
            }),
            renderer: function (value, meta, record){
                var html = '<div style="font-size: 17px">'+record.data.firstName +" "+ record.data.lastName+'</div>';
                html+='<div style="font-weight: bold">'+ record.data.company +'</div>';
                html+='<div style="font-size: 10px; color: #adadad">'+ record.data.company +'</div>';

                return html;
            }
        }];
    }
});