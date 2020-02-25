({
  handleEvent: function(component, event, helper) {
    var mensaje = event.getParam("mensaje");
    console.log("observer component 1: " + mensaje);
    component.set("v.msgEvento", mensaje);
  },

  callControllerJs: function(component, event, helper) {
    console.log(event);
    console.log(component);
    component.set("v.msgEvento", "holi chiqui");
  }
});
