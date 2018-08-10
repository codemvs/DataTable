class App{
    constructor(){
        this.init();
    }
    init(){
        this.initDataTable();
        this.clickBtnActializar();
    }
    clickBtnActializar(){
        $("#btnActializar").on("click",()=>{
            this.initDataTable();
            console.log("Actualizado");
        });        
    }
    /**
     * Inicializar DataTable
     */
    initDataTable(){
        let options=this.optionsDataTable();
        let $tabla=$("#miTabla");

        this.bodyDataTable().then(resp=>{            
            $tabla.find("tbody").children().remove().end().append(resp);
            $($tabla).DataTable().destroy();
            $($tabla).DataTable(options);
        }).catch(err=>console.log("error",err));
        
    }    
    bodyDataTable(){
        let data=[
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"},
            {nombre:"Tiger Nixon", position:"System Architect", oficio:"Edinburgh", anio:61, fechaInicio:"2011/04/25", salario:"$320,800"}
        ];
        
        return new Promise((res,rej)=>{
            try {
                let rowElements = data.map(row=>{
                    //create row
                    let $row = $('<tr></td>');                    
                    //create columns
                    let td='<td></td>';
                    let $nombre=$(td).html(row.nombre),
                        $position=$(td).html(row.position),
                        $oficio=$(td).html(row.oficio),
                        $anio=$(td).html(row.anio),
                        $fechaInicio=$(td).html(row.fechaInicio),
                        $salario=$(td).html(row.salario);
        
                    $row.append($nombre,$position,$oficio,$anio,$fechaInicio,$salario);
                    return $row;
                });
                res(rowElements);
            } catch (error) {
                rej(error);
            }
            
        });
    }
    //#region Configuracion DataTable
    /**
     * Configuracion de datatble
     * @param {*} fixColum true | false
     */
    optionsDataTable(fixColum){
        let option={
            paging:false, //paginate
            scrollY:400, //scroll vertical   
            scrollX:true, //scroll horizontal 
            scrollCollapse:true, // true elimina espacio vacios cuando heig es menos que el valor de scrollY        
            columnDefs:[
                {targets:[0], orderable:false}   //remove ordering             
            ],
            language: {// lenguaje 
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        }// lenguaje     
        //columnas staticas
        let columnaEstatica={
            fixedColumns:{
                leftColumns:1 //valor izq a derecha
            }            
        }
        if(fixColum) option = $.extend(option,columnaEstatica);
        return option;
    }
    //#endregion
    
}

(()=>{
    const app= new App();    
})();