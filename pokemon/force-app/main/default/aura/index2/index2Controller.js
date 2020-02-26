({
  handleEvent: function(component, event, helper) {
    var mensaje = event.getParam("mensaje");
    console.log("observer component 1: " + mensaje);
    component.set("v.msgEvento", mensaje);
  },

  callAura: function(component, event, helper) {
    var action = component.get("c.llamarAura");
    //var action2 = component.get("c.llamarAura2");

    action.setParams({
      mensaje: "Por favor funciona"
    });

    action.setCallback(this, function(response) {
      component.set("v.auraMsg", response.getReturnValue());
    });

    $A.enqueueAction(action);
  },

  callControllerJs: function(component, event, helper) {
    console.log(event);
    console.log(component);
    component.set("v.msgEvento", "holi chiqui");
  }
});
