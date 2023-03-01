/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Tbar Responsive',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'paneltbarresponsive'
        }]
    }, {
        title: 'Grid Columns',
        iconCls: 'fa-user',
        items: {
            xtype:"gridpanelresponsive"
        }
    }, {
        title: 'FormPanel',
        iconCls: 'fa-table',
        items: {
            xtype: 'formpanelresponsive'
        }
    }, {
        title: 'Panel Layout',
        iconCls: 'fa-users',
        items: {
            xtype: 'formpanelresponsive'
        }
    },{
        title: 'Editor Calculator',
        iconCls: 'fa-cog',
        items: {
            xtype: 'grideditorcalculator'
        }
    }]
});
