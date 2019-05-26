import { Component } from "@angular/core";

@Component({
    selector : 'meu-primeiro-componente',
    template : 
    `
        <p>Meu primeiro projeto com Angular 7, porque eu sou nojento =p</p> 
    `
})

/**
 * Ao declarar classe, ela será visível apenas no contexto do arquivo onde foi definida.
 * Para expô-la ao uso de outros componentes, deve-se utilizar a key 'export'.
 */
export class MeuPrimeiroComponent {}