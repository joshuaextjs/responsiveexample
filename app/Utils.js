Ext.define("app.Utils",{
    singleton: true,

    alternateClassName:"util",


    /**
     * Retorna un objeto que configura al componente de acuerdo a las proporciones responsivas
     * @author joshua
     * @fecha 23 de diciembre 2020
     * @param objLarge
     * @param objMedium
     * @returns {{"width < 992": *, "width >= 992": *}}
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
    }
});