/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         inicializarTimer(sym); 
         inicializarSopaDeLetras(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TIMER_CONTAINER}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         mostrarRespuestasSopaDeLetras(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnTimer}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
          startTimer(sym);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SOPA'
   (function(symbolName) {   
   
   })("SOPA");
   //Edge symbol end:'SOPA'

   //=========================================================
   
   //Edge symbol: 'testBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("testBtn");
   //Edge symbol end:'testBtn'

   //=========================================================
   
   //Edge symbol: 'btnTimer'
   (function(symbolName) {   
   
   })("btnTimer");
   //Edge symbol end:'btnTimer'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11599876");