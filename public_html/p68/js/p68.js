$("#menu2").hide();
$("#menu3").hide();
$("#menu4").hide();
$("#menu5").hide();
$("#resultado1").hide();
$("#resultado2").hide();
$("#resultado3").hide();
$("#resultado4").hide();
class operation {
    constructor() {
        this._suma;
        this._resta;
        this._division;
        this._multiplicacion;
    }
    set sum(number) {
        this._suma = number;
    }
    get sum() {
        return this._suma;
    }
    set resta(number) {
        this._resta = number;
    }
    get resta() {
        return this._resta;
    }
    set division(number) {
        this._division = number;
    }
    get division() {
        return this._division;
    }
    set multiplicacion(number) {
        this._multiplicacion = number;
    }
    get multiplicacion() {
        return this._multiplicacion;
    }
    mostrar(elemento) {
        $(elemento).show();
    }
    ocultar(elemento) {
        $(elemento).hide();
    }
    cambiarPagina(elemento, elemento2) {
        this.mostrar(elemento);
        this.ocultar(elemento2);
    }
}

var respuesta = new operation;
$("#button1").click(function () {
    respuesta.cambiarPagina("#menu2", "#menu1");
});
$("#button2").click(function () {
    respuesta.cambiarPagina("#menu3", "#menu1");
});
$("#button3").click(function () {
    respuesta.cambiarPagina("#menu4", "#menu1");
});
$("#button4").click(function () {
    respuesta.cambiarPagina("#menu5", "#menu1");
});
$("#return1").click(function () {
    respuesta.ocultar("#resultado1");
    respuesta.cambiarPagina("#menu1", "#menu2");
});
$("#return2").click(function () {
    respuesta.ocultar("#resultado2");
    respuesta.cambiarPagina("#menu1", "#menu3");
});
$("#return3").click(function () {
    respuesta.ocultar("#resultado3");
    respuesta.cambiarPagina("#menu1", "#menu4");
});
$("#return4").click(function () {
    respuesta.ocultar("#resultado4");
    respuesta.cambiarPagina("#menu1", "#menu5");
});
$("#result1").click(function () {
    let num1 = parseInt($("#sum1").val());
    let num2 = parseInt($("#sum2").val());
    let numbers = [num1 + num2];
    respuesta.sum = numbers;
    $("#1").text(respuesta.sum);
    respuesta.mostrar("#resultado1");
});
$("#result2").click(function () {
    let num1 = parseInt($("#resta1").val());
    let num2 = parseInt($("#resta2").val());
    let numbers = [num1 - num2];
    respuesta.resta = numbers;
    $("#2").text(respuesta.resta);
    respuesta.mostrar("#resultado2");
});
$("#result3").click(function () {
    let num1 = parseInt($("#multiplicacion1").val());
    let num2 = parseInt($("#multiplicacion2").val());
    let numbers = [num1 * num2];
    respuesta.multiplicacion = numbers;
    $("#3").text(respuesta.multiplicacion);
    respuesta.mostrar("#resultado3");
});
$("#result4").click(function () {
    let num1 = parseInt($("#division1").val());
    let num2 = parseInt($("#division2").val());
    let numbers = [num1 / num2];
    respuesta.division = numbers;
    $("#4").text(respuesta.division);
    respuesta.mostrar("#resultado4");
});

