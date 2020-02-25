({
  myAction: function(component, event, helper) {},

  prueba: function(cmp, evt, helper) {
    //Se añade un pokemon a la lista de equipo
    alert("Prueba de alert");
    alert("antes");
    var a = component.find("nameInput").getElement().value;
    alert("antes");
    cmp.set("v.options", a);
    alert("despues");
    alert("nombre" + nombre);
    alert("hola");
  },

  addPok: function(component, event, helper) {
    var nombre = component.find("nameInput").getElement().value;
    var vida = component.find("hpInput").getElement().value;
    var ataque = component.find("atkInput").getElement().value;

    component.set("v.nomPoke", nombre);
    component.set("v.hpPoke", vida);
    component.set("v.atkPoke", ataque);

    //Llamo a la funcion prueba
    $A.enqueueAction(component.get("c.prueba"));
  },

  cambiarMain: function(component, event, helper) {}
});
