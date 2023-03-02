Ext.define("app.view.example2.GridPanelResponsive",{
    extend:"Ext.grid.Panel",

    xtype:"gridpanelresponsive",

    title:"Grid Panel with responsive columns",

    store:{
        data: [{"id":150,"firstName":"Mayra","lastName":"Trantow","address":"754 Markus Trail Apt. 861","company":"Nicolas, Pollich and Zemlak","title":"National Web Assistant"},{"id":151,"firstName":"Amelia","lastName":"Heathcote","address":"5542 Bauch Plains Suite 176","company":"Dooley Group","title":"Principal Solutions Architect"},{"id":152,"firstName":"Cortez","lastName":"Heaney","address":"83946 Judy Burgs Apt. 700","company":"Krajcik - Stanton","title":"Product Intranet Technician"},{"id":153,"firstName":"Marcelle","lastName":"Wolf","address":"9637 Streich Bridge Suite 592","company":"Klein, Connelly and Pollich","title":"Dynamic Optimization Designer"},{"id":154,"firstName":"Raquel","lastName":"Johns","address":"0300 Littel Station Suite 699","company":"Dooley Group","title":"Senior Operations Director"},{"id":155,"firstName":"Aniyah","lastName":"Frami","address":"187 Lang Knoll Apt. 488","company":"Nicolas, Pollich and Zemlak","title":"Legacy Infrastructure Consultant"},{"id":156,"firstName":"Judd","lastName":"Ryan","address":"57469 Alfreda Pike Apt. 294","company":"Wintheiser, Corwin and Dickinson","title":"Future Paradigm Planner"},{"id":157,"firstName":"Edmond","lastName":"Mohr","address":"43097 Mittie Coves Apt. 638","company":"Nicolas, Pollich and Zemlak","title":"Customer Accounts Consultant"},{"id":158,"firstName":"Florencio","lastName":"Quigley","address":"6419 Marlon Fields Apt. 555","company":"Hagenes and Sons","title":"International Assurance Agent"},{"id":159,"firstName":"Samir","lastName":"Feil","address":"261 Garry Forge Suite 352","company":"Beatty Inc","title":"Human Applications Director"},{"id":160,"firstName":"Beaulah","lastName":"Grady","address":"00730 Hilbert Shoals Suite 693","company":"Dooley Group","title":"Customer Functionality Analyst"},{"id":161,"firstName":"Arjun","lastName":"Price","address":"6081 Mabelle Brook Suite 416","company":"Klein, Connelly and Pollich","title":"Corporate Configuration Technician"},{"id":162,"firstName":"Kaylee","lastName":"Nienow","address":"828 Jazmin Center Apt. 551","company":"Klein, Connelly and Pollich","title":"Legacy Creative Agent"},{"id":163,"firstName":"Jeremy","lastName":"Moore","address":"6121 Kerluke Plain Suite 454","company":"Quitzon Inc","title":"Senior Markets Administrator"},{"id":164,"firstName":"Charles","lastName":"Lindgren","address":"47092 Von Spring Apt. 648","company":"Hagenes and Sons","title":"Forward Interactions Developer"},{"id":165,"firstName":"Kavon","lastName":"Klein","address":"09813 Franecki Fork Apt. 534","company":"Beatty Inc","title":"Internal Configuration Director"},{"id":166,"firstName":"Gayle","lastName":"Zemlak","address":"482 Ibrahim Crossroad Suite 304","company":"Nicolas, Pollich and Zemlak","title":"Forward Operations Executive"},{"id":167,"firstName":"Marianne","lastName":"Frami","address":"149 Denesik Ferry Suite 833","company":"Hagenes and Sons","title":"Global Paradigm Agent"},{"id":168,"firstName":"Ryann","lastName":"Sanford","address":"6685 Flatley Expressway Suite 909","company":"Klein, Connelly and Pollich","title":"Chief Division Agent"},{"id":169,"firstName":"Gwen","lastName":"Bernhard","address":"00678 Pouros Groves Apt. 857","company":"Wintheiser, Corwin and Dickinson","title":"Principal Communications Orchestrator"},{"id":170,"firstName":"Randi","lastName":"Lindgren","address":"99151 Jazmyne Stream Apt. 659","company":"Beatty Inc","title":"Dynamic Factors Technician"},{"id":171,"firstName":"Alvera","lastName":"Ondricka","address":"2033 Larissa Walk Suite 464","company":"Dooley Group","title":"Legacy Web Officer"},{"id":172,"firstName":"Lucas","lastName":"Simonis","address":"63926 Stokes Valleys Apt. 459","company":"Nicolas, Pollich and Zemlak","title":"District Interactions Agent"},{"id":173,"firstName":"Jaden","lastName":"Lowe","address":"3695 Ricardo Isle Suite 825","company":"Quitzon Inc","title":"National Division Representative"},{"id":174,"firstName":"Berta","lastName":"Bins","address":"8066 Abernathy Plaza Suite 476","company":"Dooley Group","title":"International Operations Technician"},{"id":175,"firstName":"Wilma","lastName":"Treutel","address":"884 Predovic Lights Apt. 973","company":"Baumbach, Hammes and Gutmann","title":"Internal Usability Developer"},{"id":176,"firstName":"Marshall","lastName":"O'Conner","address":"12388 Douglas Plains Apt. 357","company":"Nicolas, Pollich and Zemlak","title":"Central Response Director"},{"id":177,"firstName":"Adolph","lastName":"Hagenes","address":"0678 Ernie Port Apt. 672","company":"Baumbach, Hammes and Gutmann","title":"Direct Marketing Engineer"},{"id":178,"firstName":"Perry","lastName":"Pfannerstill","address":"8449 Junius Lodge Suite 141","company":"Dooley Group","title":"Internal Program Designer"},{"id":179,"firstName":"Stevie","lastName":"Steuber","address":"82404 Mraz Road Apt. 276","company":"Dooley Group","title":"Future Usability Developer"},{"id":180,"firstName":"Coy","lastName":"Lowe","address":"36517 Jacobson Stream Suite 437","company":"Beatty Inc","title":"Future Marketing Administrator"},{"id":181,"firstName":"Mohammad","lastName":"Ullrich","address":"125 Oberbrunner Parks Apt. 785","company":"Beatty Inc","title":"Lead Functionality Manager"},{"id":182,"firstName":"Misael","lastName":"Okuneva","address":"05500 Lubowitz Plains Suite 443","company":"Nicolas, Pollich and Zemlak","title":"Internal Solutions Liaison"},{"id":183,"firstName":"Celine","lastName":"Batz","address":"16358 Mallory Pine Suite 876","company":"Krajcik - Stanton","title":"Forward Brand Agent"},{"id":184,"firstName":"Vicky","lastName":"Schmitt","address":"426 Allen Pass Suite 585","company":"Nicolas, Pollich and Zemlak","title":"Future Branding Technician"},{"id":185,"firstName":"Jack","lastName":"Will","address":"9278 Purdy Valley Apt. 159","company":"Wintheiser, Corwin and Dickinson","title":"Customer Brand Director"},{"id":186,"firstName":"Elva","lastName":"Kilback","address":"37657 Roberts Extension Apt. 396","company":"Stehr, Eichmann and Senger","title":"Legacy Assurance Technician"},{"id":187,"firstName":"Alejandrin","lastName":"Nicolas","address":"9812 Grayce Underpass Apt. 491","company":"Klein, Connelly and Pollich","title":"Principal Infrastructure Executive"},{"id":188,"firstName":"Ethan","lastName":"Windler","address":"42473 Colt Courts Apt. 299","company":"Beatty Inc","title":"Lead Intranet Consultant"},{"id":189,"firstName":"Flo","lastName":"Halvorson","address":"906 Megane Forge Suite 072","company":"Krajcik - Stanton","title":"Direct Branding Specialist"},{"id":190,"firstName":"Esperanza","lastName":"Schuppe","address":"0833 Brandon Centers Apt. 733","company":"Hagenes and Sons","title":"Regional Mobility Supervisor"},{"id":191,"firstName":"Adrianna","lastName":"Abbott","address":"3680 Langosh Turnpike Apt. 655","company":"Krajcik - Stanton","title":"Customer Security Analyst"},{"id":192,"firstName":"Kolby","lastName":"Kozey","address":"27979 Brannon Walks Suite 177","company":"Krajcik - Stanton","title":"Direct Accounts Coordinator"},{"id":193,"firstName":"Rafael","lastName":"White","address":"85859 Hoppe Mills Suite 270","company":"Beatty Inc","title":"Forward Infrastructure Analyst"},{"id":194,"firstName":"Brooks","lastName":"Dickens","address":"3653 Wiegand Views Apt. 669","company":"Klein, Connelly and Pollich","title":"District Creative Administrator"},{"id":195,"firstName":"Erling","lastName":"Connelly","address":"931 Wilderman Ville Suite 607","company":"Dooley Group","title":"National Metrics Developer"},{"id":196,"firstName":"Lisandro","lastName":"Wehner","address":"57819 Maeve Manor Apt. 903","company":"Beatty Inc","title":"National Mobility Facilitator"},{"id":197,"firstName":"Trevion","lastName":"Kshlerin","address":"54678 Suzanne Centers Apt. 656","company":"Hagenes and Sons","title":"Dynamic Research Engineer"},{"id":198,"firstName":"Shanna","lastName":"Satterfield","address":"92706 Schaden Heights Suite 746","company":"Stehr, Eichmann and Senger","title":"Internal Functionality Coordinator"},{"id":199,"firstName":"Nelle","lastName":"Veum","address":"03625 Giles Key Suite 852","company":"Wintheiser, Corwin and Dickinson","title":"Corporate Infrastructure Supervisor"}]
    },

    initComponent: function (){
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