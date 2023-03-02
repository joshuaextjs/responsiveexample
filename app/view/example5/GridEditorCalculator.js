Ext.define("app.view.example5.GridEditorCalculator",{
    extend:"Ext.grid.Panel",

    xtype:"grideditorcalculator",

    requires: [
        'Ext.selection.CellModel'
    ],

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },

    title:"Cell Editor con numbers",

    columns: [{
        header: 'Name',
        dataIndex: 'firstName',
        flex: 1
    },  {
        header: 'Price',
        dataIndex: 'code',

        width: 100,
        align: 'right',
        formatter: 'usMoney',
        editor: !util.isMovil()?{
            xtype: 'numberfield',
            allowBlank: false,
            minValue: 0,
            maxValue: 100000
        }: undefined
    }],

    initComponent: function (){
        this.store = Ext.create("app.store.Users");
        this.callParent();

        this.on({
            scope: this,
            cellclick: function (d,f,numberCell,record,sd,sgg,hsh){

                if(numberCell == 1){
                    Ext.create("calculator.WindowCalculator", {
                        listeners:{
                            scope: this,
                            oknumber: function (win,f,value){
                                record.set("code", value );
                                record.commit();
                                win.close();
                            }
                        }
                    });
                }
            }
        });
    }
});