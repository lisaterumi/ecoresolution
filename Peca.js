function Peca()
{
	var nome = "";
	var objetivo = "";
	var distanciaObjetivo = "";
	var restricoes = "";
	var statusAtual = "";
	var local = "";
	var imagem = "";
	var agredidoPor = ""; // array

	this.SetStatusAtual = SetStatusAtual;
	this.SetRestricoes = SetRestricoes; // lista?? a principio só uma restricao (posição no espaço)
	this.SetObjetivo = SetObjetivo;
	this.SetNome = SetNome;
	this.SetLocal = SetLocal; // local onde está
	this.SetImagem = SetImagem;
	this.SetDistanciaObjetivo = SetDistanciaObjetivo;
	this.SetAgredidoPor = SetAgredidoPor;

	this.GetNome = GetNome;
	this.GetLocal = GetLocal;
	this.GetStatusAtual = GetStatusAtual;
	this.GetRestricoes = GetRestricoes;
	this.GetObjetivo = GetObjetivo;
	this.GetImagem = GetImagem;
	this.GetDistanciaObjetivo = GetDistanciaObjetivo;
	this.GetAgredidoPor = GetAgredidoPor;


	function GetNome(){
	return nome;
	}

	function GetLocal(){
	return local;
	}

	function GetStatusAtual(){
	return statusAtual;
	}

	function GetRestricoes(){
	return restricoes;
	}

	function GetObjetivo(){
	return objetivo;
	}
	
	function GetImagem(){
	return imagem;
	}
	
	function GetDistanciaObjetivo(){
	return distanciaObjetivo;
	}
	
	
	function GetAgredidoPor(){
	return agredidoPor;
	}
	
	function SetLocal(_local) {
	local = _local;
	}

	function SetNome(_nome) {
	nome = _nome;
	}

	function SetStatusAtual(_statusAtual) {
	statusAtual = _statusAtual;
	}

	function SetRestricoes(_restricoes) {
	restricoes = _restricoes;
	}

	function SetObjetivo(_objetivo) {
	objetivo = _objetivo;
	}

	function SetImagem(_imagem) {
	imagem = _imagem;
	}
	
	function SetDistanciaObjetivo(_distanciaObjetivo) {
	distanciaObjetivo = _distanciaObjetivo;
	}
	
	
	function SetAgredidoPor(_agredidoPor) {
	agredidoPor = _agredidoPor;
	}
	
	
}
