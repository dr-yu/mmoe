<!-- http://goondel.ucoz.ru/
function convertDD()
{
	var deg = document.inDDMMSS.form1_dd.value;
	var min = document.inDDMMSS.form1_mm.value;
	var sec = document.inDDMMSS.form1_ss.value;

	if (deg == "" || min == "" || sec == ""){
			alert("Ââåäèòå çíà÷åíèå ÃÃ ÌÌ èëè ÑÑ");
	}

	else if (deg > 180 || deg < 0){
			alert("Çíà÷åíèå ÃÃ äîëæíî áûòü îò 0 äî 180");
	}
	else if (min > 60 || min < 0){
			alert("Çíà÷åíèå ÌÌ äîëæíî áûòü îò 0 äî 60");
	}
	else if (sec > 60 || sec < 0){
			alert("Çíà÷åíèå ÑÑ äîëæíî áûòü îò 0 äî 60");
	}

	else {

		document.inDDMMSS.form1_gpsdeg.value = deg;

		var dec_min = (min*1.0 + (sec/60.0));
		document.inDDMMSS.form1_gpsmin.value = dec_min.toFixed(3);

		var answer1 = deg*1.0 + (dec_min/60.0);
		document.inDDMMSS.form1_dec.value=answer1.toFixed(6);
	}
}

function convertDecDeg()
{
	var deg = 0;
	deg = document.inDecDeg.form2_dec.value;

	if (deg == ""){
			alert("Ââåäèòå çíà÷åíèå ÃÃ.ÃÃÃÃÃÃ");
		}
		else if (deg > 180 || deg < 0){
			alert("Çíà÷åíèå ÃÃ.ÃÃÃÃÃÃ äîëæíî áûòü îò 0 äî 180");
		}
	else {
		var gpsdeg = parseInt(deg);
		var remainder = deg - (gpsdeg * 1.0);
		var gpsmin = remainder * 60.0;

		document.inDecDeg.form2_gpsdeg.value = gpsdeg;
		document.inDecDeg.form2_gpsmin.value = gpsmin.toFixed(3);

		document.inDecDeg.form2_dd.value = gpsdeg;
		document.inDecDeg.form2_mm.value= parseInt(gpsmin);
		var remainder2 = gpsmin - (parseInt(gpsmin)*1.0);
		document.inDecDeg.form2_ss.value = parseInt(remainder2*60.0);
	}
}

function convertGps()
{
	var deg = 0;
	var min = 0;
	deg = document.inGPScoord.form3_gpsdeg.value;
	min = document.inGPScoord.form3_gpsmin.value;

	if (deg == "" || min == ""){
			alert("Ââåäèòå çíà÷åíèå ÃÃ èëè ÌÌ.ÌÌÌ");
	}
	else if (deg > 180 || deg < 0){
			alert("Çíà÷åíèå ÃÃ äîëæíî áûòü îò 0 äî 180");
	}
	else if (min > 60 || min < 0){
			alert("Çíà÷åíèå ÌÌ.ÌÌÌ äîëæíî áûòü îò 0 äî 60");
	}
	else {
		var decdeg = (deg*1.0) + min/60.0;
		document.inGPScoord.form3_dec.value = decdeg.toFixed(6);

		document.inGPScoord.form3_dd.value = deg;
		document.inGPScoord.form3_mm.value= parseInt(min);
		var remainder2 = min - (parseInt(min)*1.0);
		document.inGPScoord.form3_ss.value = parseInt(remainder2*60.0);
	}
}	//-->
