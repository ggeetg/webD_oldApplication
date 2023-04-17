
////////////////////   AJAX FUNCTIONS   ///////////////////////////////////////////////////////////////////////////
  
  // load state ajax
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("p_state").innerHTML = this.responseText;
          document.getElementById("hos_state").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "state_ajax.php", true);
    xhttp.send();

  // load patient state district ajax
    function loadPD(str) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("p_district").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "district_ajax.php?sta="+str, true);
    xhttp.send();
    };

  // load hospital state district ajax
    function loadHOSD(str) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("hos_district").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "district_ajax.php?sta="+str, true);
    xhttp.send();
    };

  // load hospital department ajax
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("dept").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "dept_ajax.php", true);
    xhttp.send();

  // load ICD-10 level-1 list ajax
  function ld_icd(str){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("level1"+str).innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "getLevel1.php", true);
    xhttp.send();
  };
  ld_icd(0);
  
  // level 2,3,4 ajax codes by yashmin sir
  function get_l2(str,my){
	var code = my.value;
	//alert(code);
	$.ajax({
		url: 'getLevel2.php',
		type: 'post',
		data: {icdid:code},
		dataType: 'json',
		success:function(response2){
			//alert(response2);
			if(document.getElementById("level1"+str).value=="PCS")
			{
				document.getElementById("level4"+str).style.visibility='hidden';
				document.getElementById("level3"+str).style.visibility='hidden';
				document.getElementById("level4"+str).value='';
				document.getElementById("level3"+str).value='';
			}
			else
			{
				document.getElementById("level4"+str).style.visibility='Visible';
				document.getElementById("level3"+str).style.visibility='Visible';			
			}
			var len2 = response2.length;            
			$("#level2"+str).empty();
			$("#level2"+str).append("<option value='0'>- Select -</option>");  
			for( var i2 = 0; i2<len2; i2++){
				var id2 = response2[i2]['id2'];
				var name2 = response2[i2]['name2'];
				$("#level2"+str).append("<option value='"+id2+"'>"+name2+"</option>");    
			}
		}
	});    
  }
  
  function get_l3(str,my){
	var deptid = my.value;
	$.ajax({
		url: 'getLevel3.php',
		type: 'post',
		data: {depart:deptid},
		dataType: 'json',
		success:function(response1){
			var len = response1.length;
			$("#level3"+str).empty();
			$("#level3"+str).append("<option value='0'>- Select -</option>");  
			for( var i = 0; i<len; i++){
				var id = response1[i]['id'];
				var name = response1[i]['name'];
				$("#level3"+str).append("<option value='"+id+"'>"+name+"</option>");
			}
		}
	});
  }
	  
  function get_l4(str,my){
	var code = my.value;
	$.ajax({
		url: 'getLevel4.php',
		type: 'post',
		data: {icdid:code},
		dataType: 'json',
		success:function(response4){
			var len4 = response4.length;
			if(len4>0)
			{           
			document.getElementById("level4"+str).style.visibility='visible';
			$("#level4"+str).empty();
			$("#level4"+str).append("<option value='0'>- Select -</option>");  
			for( var i4 = 0; i4<len4; i4++){
				var id4 = response4[i4]['id4'];
				var name4 = response4[i4]['name4'];
				//$("#sel_level4").append("<option value='"+id4+"'>"+name4+"</option>");
				$("#level4"+str).append("<option value='"+id4+"'>"+name4+"</option>");    
			}
			}
			else
			{
				document.getElementById("level4"+str).style.visibility='hidden';
				document.getElementById("level4"+str).value='0';
			}
		}
	});
  }
  
  // drug dictionary name ajax
  function dd_name(str,id) {
    if (str.length==0) {
    document.querySelectorAll(".dd_livesearch")[id].innerHTML="";
    document.querySelectorAll(".dd_livesearch")[id].style.border="0px";
    return;
    }
    if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.querySelectorAll(".dd_livesearch")[id].innerHTML=this.responseText;
      document.querySelectorAll(".dd_livesearch")[id].style.border="1px solid #A5ACB2";
    }
    }
    xmlhttp.open("GET","dd_livesearch.php?q="+str,true);
    xmlhttp.send();
  }

  $(document).ready(function(){
    $("#myForm").on("keyup",".dName",function(){
      let id1 = $(".dName").index($(this));
      dd_name($(this).val(),id1);

    });
  });

  $(document).mouseup(function(e){
    var container = $(".dd_livesearch");
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        for( let x of container)
          x.innerHTML="";
    }
});

//////////////////////////////////////////    END OF AJAX FUNCTIONS     //////////////////////////////////////
$(document).ready(function(){
	// add icd-10 and diagnosis fields dynamically and remove also
	$(document).ready(function(){      
		  var i=0;
		  var j=1;  
		  $('#add').click(function(){  
			   i++;  
			   $('#dynamic_field').append('<tr id="row'+i+'" ><td id="icd-row'+i+'"><select onchange="get_l2('+i+',this)" id="level1'+i+'" name="sel_level1[]" ><option value="">Select</option></select></td><td><select onchange="get_l3('+i+',this)" id="level2'+i+'" name="sel_level2[]" ><option value="">Select</option></select></td><td><select onchange="get_l4('+i+',this)" id="level3'+i+'" name="sel_level3[]" ><option value="">Select</option></select></td><td><select id="level4'+i+'" name="sel_level4[]" ><option value="">Select</option></select></td><td><input type="text" name="diagnosis[]" id="diagn'+i+'" placeholder="Enter Diagnosis" autocomplete="off" required /><button type="button" name="remove" id="'+i+'" class="btn_remove">X</button></td><td></td></tr>');
			   ld_icd(i);  //call icd ajax funtion to add icd level
		  });
		  $(document).on('click', '.btn_remove', function(){  
			   var button_id = $(this).attr("id");   
			   $('#row'+button_id+'').remove();
		  }); 
	});  
		
	
	
	// make all fields required
	function req(){
		var x=document.getElementsByTagName("select");
		for( i=0;i<(x.length);i++){
		  x[i].required=true;
		}
		var x=document.getElementsByTagName("input");
		for( i=0;i<(x.length-3);i++){
		  x[i].required=true;
		}
	}
//	req();
	
	
	
	// append div by click copy button
	$(document).ready(function(){
		$("#copy").click(function () {
						$("#toCopy").clone().find("h4").text("New Drug Entry").end().find("input").val("").end().append("<input type='button' value='Remove Drug Table' class='rdt' style='float:right;'>").appendTo("#copied-item");
						//$('html, body').animate({
						//		 scrollTop: $("#copied-item fieldset:last").offset().top   //id of div to be scrolled
						//  }, 1000);
		});
	});
	
	
	//remove cloned div
	$(document).ready(function(){
		$("#copy").click(function () {
				$(".rdt").unbind("click").bind("click", function(){
				  $(this).closest("fieldset").remove();
				});
		});
	});
	
	
	///// SHOW HIDDEN TEXT BOX BY CLICK YES
	function shwtxt() {
			$(".1").unbind("change").bind("change", function(){
			  var divs = $(".1");
			  var curIdx = divs.index($(this));
			  if(document.getElementsByClassName("1")[curIdx].value==""||document.getElementsByClassName("1")[curIdx].value=="no"){
				document.getElementsByClassName("2")[curIdx].style.display="none";
				document.getElementsByClassName("2")[curIdx].required=false;
				document.getElementsByClassName("2")[curIdx].value="";
			  }
			  else{
				document.getElementsByClassName("2")[curIdx].style.display="inline-block";
				document.getElementsByClassName("2")[curIdx].required=true;
			  }
		  });
	}
	$(document).ready(function(){
		document.getElementById("copy").addEventListener('click',shwtxt);
		shwtxt();
	});	
	
	
	///// FDC OTHER DATA
	function shwFDC() {
	  $(".5").unbind("change").bind("change", function(){
		  var divs = $(".5");
		  var curIdx = divs.index($(this));
		  var curid =curIdx*3;
		  if(document.getElementsByClassName("5")[curIdx].value==""||document.getElementsByClassName("5")[curIdx].value=="no"){
			  document.getElementsByClassName("6")[curid].disabled=true;
			document.getElementsByClassName("6")[curid].value="";
			document.getElementsByClassName("6")[curid+1].disabled=true;
			document.getElementsByClassName("6")[curid+1].value="Not Mentioned";
			document.getElementsByClassName("6")[curid+2].disabled=true;
			document.getElementsByClassName("6")[curid+2].value="Not Mentioned";
		  }
		  else{
			document.getElementsByClassName("6")[curid].disabled=false;
			document.getElementsByClassName("6")[curid+1].disabled=false;
			document.getElementsByClassName("6")[curid+2].disabled=false;
		  }
	  });
	}
	$(document).ready(function(){
		document.getElementById("copy").addEventListener('click',shwFDC);
		shwFDC();
	});
	
	
	///// accurate hide and show function
	function shwACUR() {
		$(".accurate").unbind("change").bind("change", function(){
		  var divs = $(".accurate");
		  var curIdx = divs.index($(this));
		  var divlen = 7;  // change according to accr or accr2 column no.
		  var curid =curIdx*divlen;
		  if(document.getElementsByClassName("accurate")[curIdx].value==""||document.getElementsByClassName("accurate")[curIdx].value=="appropriate"){
			for(var i=0;i<divlen;i++){
				document.getElementsByClassName("accr")[curid+i].style.display="none";
				document.getElementsByClassName("accr2")[curid+i].value="correct";
			}
		  }
		  else{
			for(var i=0;i<divlen;i++){
				document.getElementsByClassName("accr")[curid+i].style.display="table-cell";
			}
		}
	  });
	}
	$(document).ready(function(){
		document.getElementById("copy").addEventListener('click',shwACUR);
		shwACUR();
	});
	
	

});

	function submitdata(){
		var x=document.getElementsByTagName("select");
		for(var i=0;i<(x.length);i++){
		  x[i].disabled=false;
		}
		var x=document.getElementsByTagName("input");
		for(var i=0;i<(x.length);i++){
		  x[i].disabled=false;
		}
		return true;
	}