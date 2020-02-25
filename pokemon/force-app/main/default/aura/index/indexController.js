({
  test: function(component, event, helper) {
    component.set("v.name", "Ash Ketchup");
  },

  test1: function(component, event, helper) {
    var temp = component.find("userInput").getElement().value;
    component.set("v.nombre", temp);
  }
});
