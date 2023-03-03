Ext.define("app.Utils",{
    singleton: true,

    alternateClassName:"util",

    /**
     * @author joshua
     * @fecha 2/23/2023
     */
    getResponsive: function (objMedium, objSmall, objextraSmall){
        objextraSmall = objextraSmall || objSmall;

        return {
            'width >= 992': objMedium,
            'width >= 768  && width < 992': objSmall,
            'width < 768': objextraSmall
        }
    },

    isMovil: function (){
        return Ext.os.deviceType!="Desktop";
    }
});