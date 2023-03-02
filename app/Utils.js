Ext.define("app.Utils",{
    singleton: true,

    alternateClassName:"util",


    /**
     * @author joshua
     * @fecha 2/23/2023
     */
    getResponsive: function (objMedium, objSmall, objextraSmall,objexxtraSmall){
        objextraSmall = objextraSmall || objSmall;

        objexxtraSmall= objexxtraSmall || objextraSmall;

        return {
            'width >= 992': objMedium,
            'width >= 768  && width < 992': objSmall,
            'width >= 576  && width < 768': objextraSmall,
            'width < 576 ': objexxtraSmall
        }
    },

    isMovil: function (){
        return Ext.os.deviceType!="Desktop";
    }
});