public with sharing class Controlador {
    public Controlador() {

    }

    @AuraEnabled
    public static string llamarAura(String mensaje){
        return mensaje + ' Has llamado a Aura';
    }

    @AuraEnabled
    public static string llamarAura2(){
        return 'No has mandado nada';
    }
}
