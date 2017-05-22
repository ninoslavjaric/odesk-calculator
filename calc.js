// JavaScript Document
function change(e){
	e.value='\u00A3 '+e.value;	//there must be done some modifications	
	}

function calculation(){

var a0, a, b, c, d, e, f, g, h, i;
a0 = document.getElementById("a0");
a = document.getElementById("a"); 

var aa=parseFloat(a.value.slice(2,a.value.length));

b = document.getElementById("b");
c = document.getElementById("c");
d = document.getElementById("d");
e = document.getElementById("e");
f = document.getElementById("f");
g = document.getElementById("g");
h = document.getElementById("h");
i = document.getElementById("i");
j = document.getElementById("j");
    if (aa=="" || aa==NaN || b.value=="" || b.value==NaN || c.value=="" || c.value==NaN) {
		d.value=e.value=f.value=g.value=h.value=i.value=j.value="not enough data";
		return;}
	if (aa==(c.value-0.05) || c.value==0.05) {
		d.value=e.value=f.value=g.value=h.value=i.value=j.value="mathematical error";
		return;}
if(a0.checked==true){ee=aa*b.value;}else{
ee=aa*(b.value-1);}

dd=ee/(c.value-0.05);
gg=(c.value-1)*dd;
hh=dd*0.95;
ff=ee-(dd*(c.value-1));
ii=ff/aa;
if(hh<=ff){jj=hh;}else{jj=ff;}

d.value="\u00A3 "+dd.toFixed(2);
e.value="\u00A3 "+ee.toFixed(2);
f.value="\u00A3 "+ff.toFixed(2);
g.value="\u00A3 "+gg.toFixed(2);
h.value="\u00A3 "+hh.toFixed(2);
i.value=(ii*100).toFixed(2)+" %";
j.value="\u00A3 "+jj.toFixed(2);
}