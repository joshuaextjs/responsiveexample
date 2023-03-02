Ext.define("app.view.example4.PanelLayoutResponsive",{
    extend:"Ext.Panel",

    xtype:"panellayoutresponsive",

    title:"Layouts depending on Device",

    initComponent: function (){

        Ext.apply( this, {
            tbar:["->",{
                iconCls:'fa fa-plus-circle'
            },{
                iconCls:'fa fa-search',
                hidden: util.isMovil()? false: true,
                scope: this,
                handler: this.onSearch
            }],
            layout: util.isMovil() ?'card': {
                type:"hbox",
                align:"stretch"
            },
            items: this.buildItems()
        });

        this.callParent();
    },

    buildItems: function (){
        return [{
            flex: 2,
            layout:"fit",
            padding: "0 10 0 0",
            items:[{
                title: undefined,
                xtype:"gridpanelresponsive"
            }]
        },{
            flex: 1,
            items:[{
                title: "Search",
                xtype: 'fieldset',
                defaultType:"textfield",
                items: [{
                    fieldLabel: 'First Name',
                    name: 'firstName',
                    emptyText: 'First',
                    allowBlank: false
                }, {
                    fieldLabel: 'Last Name',
                    name: 'lastName',
                    emptyText: 'Last',
                    allowBlank: false
                },{
                    xtype:"button",
                    iconCls:'fa fa-search',
                    text:"Search",
                    scope: this,
                    handler: this.onSearchButton
                }]
            }]
        }];
    },

    onSearch: function (bb){
        this.layout.setActiveItem(1);
        var dockets = this.getDockedItems();
        dockets[1].hide();
    },

    onSearchButton: function (){
        if( util.isMovil() ) {
            this.layout.setActiveItem(0);
            var dockets = this.getDockedItems();
            dockets[1].show();
        }

        var firstName = this.down("textfield[name=firstName]").getValue();

        var gridpanelresponsive = this.down("gridpanelresponsive");
        gridpanelresponsive.store.addFilter({
            property: 'firstName',
            value: firstName,
            anyMatch: true,
            operator: 'like'
        });
    }
});