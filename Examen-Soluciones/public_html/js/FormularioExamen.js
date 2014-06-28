Ext.application({
   
  name:"exa-mensito",
  launch:function(){
     // Ext.Msg.confirm('Probando si lo hice bien');
Ext.create('Ext.TabPanel',{
    fullscreen:true,
    tabBarPosition:'bottom',
    items:[Formulario1
        
           /* {
                title:'centigrados',
                iconCls:'user',
                html:'Calcular de farenheit a Centigrados'
                
            }*/,
            {
                title:'Farenheit',
                iconCls:'composer',
               html:'Calculo de centigrados a farenheit'
               
            }
        
    ]
});
  }
});
/*Panel del formulario de farenheit a centigrados*/
var Formulario1={
    xtype:'fieldset',
    title:'Centigrados',
    iconCls:'user',
    items:[
          {
  

            html:['<center><h1>Calculo de Centigrados a Farenheit</h1>',
                '<br>',
            '<p>Introduce el valor de grados farenheit en el campo siguiente</p>',
            '</center>'].join('')
          },
          {
              xtype:'textfield',
                 placeHolder:'Escribe aqui los grados'
             },
             {
          xtype:'button',
          text:'Hacer conversion',
         ui:'confirm',
         handler:function (){
          Ext.Msg.alert("Resusltado de la conversion");
          }
         }
          ]
    }