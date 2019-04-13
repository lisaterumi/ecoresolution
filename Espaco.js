function Espaco()
{
	var id = "";
	var espacosAdjacentes = "";
	var ocupadoPor = "";

	this.SetId = SetId;
	this.SetEspacosAdjacentes = SetEspacosAdjacentes;
	this.SetOcupadoPor = SetOcupadoPor;

	this.GetId = GetId;
	this.GetEspacosAdjacentes = GetEspacosAdjacentes;
	this.GetOcupadoPor = GetOcupadoPor;

	function GetId(){
	return id;
	}

	function GetEspacosAdjacentes(){
	return espacosAdjacentes;
	}

	function GetOcupadoPor(){
	return ocupadoPor;
	}

	function SetId(_id){
	id=_id;
	}

	function SetEspacosAdjacentes(_espacosAdjacentes){
	espacosAdjacentes=_espacosAdjacentes;
	}

	function SetOcupadoPor(_ocupadoPor){
	ocupadoPor=_ocupadoPor;
	}

}

var espaco1 = new Espaco();
espaco1.SetId("1");
espaco1.SetOcupadoPor("");

var espaco2 = new Espaco();
espaco2.SetId("2");
espaco2.SetOcupadoPor("");

var espaco3 = new Espaco();
espaco3.SetId("3");
espaco3.SetOcupadoPor("");

var espaco4 = new Espaco();
espaco4.SetId("4");
espaco4.SetOcupadoPor("");

var espaco5 = new Espaco();
espaco5.SetId("5");
espaco5.SetOcupadoPor("");

var espaco6 = new Espaco();
espaco6.SetId("6");
espaco6.SetOcupadoPor("");

var espaco7 = new Espaco();
espaco7.SetId("7");
espaco7.SetOcupadoPor("");

var espaco8 = new Espaco();
espaco8.SetId("8");
espaco8.SetOcupadoPor("");

var espaco9 = new Espaco();
espaco9.SetId("9");
espaco9.SetOcupadoPor("");

espaco1.SetEspacosAdjacentes([espaco2, espaco4]);
espaco2.SetEspacosAdjacentes([espaco1, espaco3, espaco5]);
espaco3.SetEspacosAdjacentes([espaco2, espaco6]);
espaco4.SetEspacosAdjacentes([espaco1, espaco5, espaco7]);
espaco5.SetEspacosAdjacentes([espaco2, espaco4, espaco6, espaco8]);
espaco6.SetEspacosAdjacentes([espaco3, espaco5, espaco9]);
espaco7.SetEspacosAdjacentes([espaco4, espaco8]);
espaco8.SetEspacosAdjacentes([espaco5, espaco7, espaco9]);
espaco9.SetEspacosAdjacentes([espaco6, espaco8]);
