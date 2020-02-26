({
  doInit: function(component, event, helper) {
    helper.populateObjectList(component, event);
  },

  addCoche: function(component, event, helper) {
    var coches = component.get("v.coche");
    var cochesEv = event.getParam("coches");

    var marca = component.find("v.inputMarca").getElement().value;
    var modelo = component.find("v.inputModelo").getElement().value;
    var color = component.find("v.inputColor").getElement().value;
    var precio = component.find("v.inputPrecio").getElement().value;

    coches.push({
      marca: marca,
      modelo: modelo,
      color: color,
      precio: precio,
      estado: "No vendido"
    });

    action.setParams({
      cochesEvento: coches
    });
  },

  cambiarEstado: function(component, event, helper) {},
  modPrecio: function(component, event, helper) {}
});
