// JavaScript Document

function fija(ii,jj){
    switch(jj){
        case 0:
            switch(ii){
                case 0:
                    return "<label>Free bet stake returned?</label>";
                    break;
                case 2:
                    return "<label>Free bet stake</label>";
                    break;
                case 3:
                    return "<label>Back odds</label>";
                    break;
                case 4:
                    return "<label>Lay odds</label>";
                    break;
                case 6:
                    return "<label>Your lay stake</label>";
                    break;
                case 8: 
                    return "<label>Back bet returns</label>";
                    break;
                case 9:
                    return "<label>Back net return</label>";
                    break;
                default: return "";
            }
            break;
        case 1:
            switch(i){
                case 0:
                    return "<label><input id=\"a0\" type=\"radio\" name=\"1\" checked value=\"yes\" onclick=\"calculation()\" />Yes</label><label><input type=\"radio\" name=\"1\" value=\"no\" onclick=\"calculation()\" />No</label>";
                    break;
                case 2:
                    return "<input id=\"a\" type=\"text\" onfocus=\"this.value=''\" onchange=\"change(this); calculation(); this.value='\u00A3 '+parseFloat(this.value.slice(2,this.value.length)).toFixed(2)\" />";
                    break;
                case 3:
                    return "<input id=\"b\" type=\"text\" onfocus=\"this.value=''\" min=\"0\" step=\"0.01\" onchange=\"calculation()\" onblur=\"this.value=(this.value*1).toFixed(2)\" />";
                    break;
                case 4:
                    return "<input id=\"c\" type=\"text\" onfocus=\"this.value=''\" min=\"0\" step=\"0.01\" onchange=\"calculation()\" onblur=\"this.value=(this.value*1).toFixed(2)\" />";
                    break;
                case 6:
                    return "<input  id=\"d\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                case 8:
                    return "<input id=\"e\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                case 9:
                    return "<input id=\"f\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                default: return "";
            }
            break;
        case 2: default: return"";
        case 3:
            switch(i){
                case 8:
                    return "<label>Lay bet liability</label>";
                    break;
                case 9:
                    return "<label>Lay net return</label>";
                    break;
                case 12:
                    return "<label>Free bet % return</label>";
                    break;
                case 13:
                    return "<label>Profit</label>";
                    break;
                default: return "";
            }
            break;
        case 4:
            switch(i){
                case 8:
                    return "<input id=\"g\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                case 9:
                    return "<input id=\"h\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                case 12:
                    return "<input id=\"i\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                case 13:
                    return "<input id=\"j\" type=\"text\" readonly value=\"not enough data\" />";
                    break;
                default: return "";
            break;
    }

}
}


var pane = document.getElementById("betcalc");
var table = document.createElement("table"); table.id="tabcal"; pane.appendChild(table);
for(i=0;i<=13;i++){ row = document.createElement("tr"); table.appendChild(row);
	for(j=0;j<=4;j++){
		var cell = document.createElement("td");
		cell.id="cell"+i+j;
		cell.innerHTML=fija(i,j);
        if (i==13 && j==0){cell.colspan=4;}
		row.appendChild(cell);
		}
	}