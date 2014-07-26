
normalcolor="#fd6";
aktivcolor="#eeb";

normalbackground="#444";			// == ig.css #menu h2.background
aktivbackground="#666";				// == ig.css div.panel.background

normaltext="::";
aktivtext="^";

// function zarmind() {
//	if (document.getElementById && document.createTextNode) {
//		var div = document.getElementsByTagName("div");
//		for (var i=0; i < div.length; i++) {
//			if ((div[i].className == "panel") || (div[i].className == "alpanel"))
//				div[i].style.display = "none";
//		}
//	}
/*	if (document.getElementById && document.createTextNode) {
		styletag=document.createElement('style');
		styletag.setAttribute('type','text/css');
		styletext=document.createTextNode('div.panel{display:none;}');
//		styletag.appendChild(styletext);
//		styletag=document.getElementsByTagName('style');
//		alert( styletag.length );
		styletag.appendChild(styletext);
		document.appendChild(styletag);
	}
} */

function nyitzardiv( cimid, panelid ) {
	if (document.getElementById && document.createTextNode) {
		panel=document.getElementById(panelid);
		if (panel != null) {
			kapcsolo=panel.style.display;						// mi van most
//			kapcsolo=panel.style.position;						// mi van most
			if (kapcsolo == "block") kapcsolo="none";
			else if (kapcsolo=="" || kapcsolo=="none") kapcsolo="block";
//			if (kapcsolo=="" || kapcsolo == "absolute") {
//				kapcsolo="static";
//				szelesseg="auto";
//				magassag="auto";
//			} else if (kapcsolo=="static") {
//				kapcsolo="absolute";
//				szelesseg="900px";
//				magassag="1px";
//			}
			panel.style.display=kapcsolo;						// valtas
//			panel.style.position=kapcsolo;						// valtas
//			panel.style.width=szelesseg;						// valtas
//			panel.style.height=magassag;						// valtas
		}
		cim=document.getElementById(cimid);
		if (cim != null) {
			hiper=cim.getElementsByTagName("a").item(0).firstChild;
			if (kapcsolo == "none") {
//			if (kapcsolo == "absolute") {
				hiper.nodeValue=hiper.nodeValue.replace(aktivtext,normaltext);
				if (cim.className == "menucim") cim.style.background=normalbackground;	// csak h2.menucim
				cim.style.color=normalcolor;
			} else {
				hiper.nodeValue=hiper.nodeValue.replace(normaltext,aktivtext);
				if (cim.className == "menucim") cim.style.background=aktivbackground;
				cim.style.color=aktivcolor;
			}
		}
	}
}

function zardiv( cimid, panelid ) {
	if (document.getElementById && document.createTextNode) {
		panel=document.getElementById(panelid);
		if (panel != null) {
			panel.style.display="none";
//			panel.style.position="absolute";
//			panel.style.width="900px";
//		panel.style.height="1px";
		}
		cim=document.getElementById(cimid);
		if (cim!=null) {
			hiper=cim.getElementsByTagName("a").item(0).firstChild;
			hiper.nodeValue=hiper.nodeValue.replace(aktivtext,normaltext);
			if (cim.className=="menucim") cim.style.background=normalbackground;
			cim.style.color=normalcolor;
		}
	}
}

function nyitdiv( cimid, panelid ) {
	if (document.getElementById && document.createTextNode) {
		panel=document.getElementById(panelid);
		if (panel!=null) {
			panel.style.display="block";
//			panel.style.position="static";
//			panel.style.width="auto";
//			panel.style.height="auto";
		}
		cim=document.getElementById(cimid);
		if (cim!=null) {
			hiper=cim.getElementsByTagName("a").item(0).firstChild;
			hiper.nodeValue=hiper.nodeValue.replace(normaltext,aktivtext);
			if (cim.className=="menucim") cim.style.background=aktivbackground;
			cim.style.color=aktivcolor;
		}
	}
}

 if (document.getElementById && document.createTextNode) {
	document.write('<style type="text/css">div.panel{display:none;}</style>');
	document.write('<style type="text/css">div.alpanel{display:none;}</style>');
 }
// if (document.getElementById && document.createTextNode) {
//	document.write('<style type="text/css">div.panel{position:absolute;left:-999px;width:900px;height:1px;overflow:hidden;}</style>');
//	document.write('<style type="text/css">div.alpanel{position:absolute;left:-999px;width:900px;height:1px;overflow:hidden;}</style>');
// }    
