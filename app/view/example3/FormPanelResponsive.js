Ext.define("app.view.example3.FormPanelResponsive",{
    extend:"Ext.FormPanel",

    xtype:"formpanelresponsive",

    title:"FormPanel width responsive inputs",

    scrollable: 'y',

    bodyPadding: 10,

    initComponent: function (){
        this.items = this.buildItems();
        this.callParent();
    },

    buildItems: function (){
        var items = [{
            xtype: 'fieldset',
            title: 'Contact Information',
            layout: 'anchor',
            items: [{
                xtype: 'container',
                defaultType: 'container',
                defaults: {
                    layout:"anchor",
                    anchor: '100%',
                    flex: 1,
                    defaults:{
                        anchor: '95%',
                        labelWidth: 110,
                        xtype:"textfield"
                    }
                },

                responsiveConfig: util.getResponsive({
                    layout:{
                        type:"box",
                        vertical: false,
                        align: 'stretch'
                    }
                }, {
                    layout:{
                        type:"box",
                        vertical: true,
                        align: 'stretch'
                    }
                }),

                items: [{
                    items:{
                        fieldLabel: 'First Name',
                        name: 'firstName',
                        emptyText: 'First',
                        allowBlank: false
                    }
                }, {
                    items:{
                        fieldLabel: 'Last Name',
                        name: 'lastName',
                        emptyText: 'Last',
                        allowBlank: false
                    }
                }]
            }, {
                xtype: 'container',
                defaultType: 'container',
                defaults: {
                    layout:"anchor",
                    anchor: '100%',
                    flex: 1,
                    defaults:{
                        anchor: '95%',
                        labelWidth: 110,
                        xtype:"textfield"
                    }
                },

                responsiveConfig: util.getResponsive({
                    layout:{
                        type:"box",
                        vertical: false,
                        align: 'stretch'
                    }
                }, {
                    layout:{
                        type:"box",
                        vertical: true,
                        align: 'stretch'
                    }
                }),

                items: [{
                    items:{
                        fieldLabel: 'Email Address',
                        name: 'email',
                        vtype: 'email',
                        flex: 1,
                        allowBlank: false
                    }
                }, {
                    items:{
                        fieldLabel: 'Phone Number',
                        name: 'phone',
                        cls: 'input-label-zero-transform',
                        width: 220,
                        emptyText: 'xxx-xxx-xxxx',
                        maskRe: /[\d\-]/,
                        regex: /^\d{3}-\d{3}-\d{4}$/,
                        regexText: 'Must be in the format xxx-xxx-xxxx'
                    }
                }]
            }]
        }
        ];

        return items;
    }
});