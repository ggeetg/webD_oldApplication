<!DOCTYPE html>
<html lang="en">
<head>
	<title>NCERT MIS-App</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- Popper JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<style type="text/css">
		#linebar{
			background: #373B44;  /* fallback for old browsers */
			background: -webkit-linear-gradient(to right, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
			background: linear-gradient(to right, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			height: 10px;
			width: 100%;
		}
	</style>
</head>
<body>
   <body class="main-layout home_page">
      <!-- header -->
	<header style="background-image: url('images/bg-01.jpg')">
         <!-- header inner -->
			<div style="text-align: center; background: #388888;">
	         	<h2 style="color: #fff; padding: 9px; margin: 0;">PAC Programmes Portal</h2>
	   		</div>
	   		<div id="linebar"></div>
         <!-- end header inner -->
    </header>
     <div class="container">
<!--      	<div class="card bg-success text-white">
     		<div class="card-body text-center">Programme Proposal Registration Form</div>
     	</div> -->
     	<br>
     	<h2 align="center">Programme Proposal Registration Form</h2>
     	<br>
     	<br>
     	<div>
     		<form>
     			<div class="row">
     			<div class="col">
     				<label for="pac_code">PAC code:</label><input type="text" class="form-control" name="pac_code" id="pac_code" placeholder="Enter PAC Code">
     			</div>
     			<div class="col">
     			<label>Year:</label><br><input type="number" class="form-control" name="year_from" style="width: 48%; display: inline-block;"> <input type="number" class="form-control" name="year_till" style="width: 48%; display: inline-block;" placeholder="">
     			</div></div>
     			<div class="">
     			<label>Name of Constituent Unit:</label><input type="text" class="form-control" name="const_unit">
     			</div>
     			<div class="">
     			<label>Title:</label><input type="text" class="form-control" name="title">
     			</div>
     			<div class="row">
     			<div class="col">
     			<label>Type:</label><select class="form-control"><option>Select</option></select>
     			</div>
     			<div class="col">
     			<label>Status:</label><select class="form-control"><option>Select</option></select>
     			</div></div>
     			<div class="row">
     			<div class="col">
     			<label>Budget Allocated (in INR):</label><input type="number" class="form-control" name="budget_all">
     			</div>
     			<div class="col">
     			<label>Budget Utilized (in INR):</label><input type="number" class="form-control" name="budget_util">
     			</div></div>
     			<div class="row">
     			<div class="col">
     			<label>Scope:</label><select class="form-control"><option>Select</option></select>
     			</div>
     			<div class="col">
     			<label>Category:</label><select class="form-control"><option>Select</option></select>
     			</div>
     			<div class="col">
     			<label>Stage:</label><select class="form-control"><option>Select</option></select>
     			</div></div>
     			<div class="">
     			<label>Objective:</label><br><textarea name="objective" class="form-control"></textarea>
     			</div>
     			<div class="">
     			<label>Methodology:</label><br><textarea name="methodology" class="form-control"></textarea>
     			</div>
     			<div class="row">
     			<div class="col">
     			<label>tools:</label><input type="text" class="form-control" name="tools">
     			</div>
     			<div class="col">
   				<div class="form-group"> 
     			<label>Duration:</label><br><input type="number" class="form-control" name="duration" style="width: 50%; display: inline-block;"><select class="form-control" style="width: 40%; display: inline-block;"><option>Select</option></select>
     			</div></div></div>
     			<div class="">
     			<label>Colloborating Agencies:</label><br><textarea name="agencies" class="form-control"></textarea>
     			</div>
     			<div class="col">
     			<label>Activities:</label><br>
     				<label>Target Date of Completion:</label><input type="Date" name="target_date">
     				<label>Completed/Not Completed:</label><select><option>Select</option></select>
     				<label>Obstacles if any:</label><input type="text" name="obs_txt">
     				<button type="button" class="btn-sm btn-primary">Add</button>
     			</div>
     			<div class="col">
     			<label>Project Staff Details:</label><br>
     				<label>Project staff:</label><input type="number" name="total_staff">
     				<label>Senctioned numbers:</label><input type="number" name="">
     				<label>Duration:</label><input type="number" name="">
     				<label>Expenditure:</label><input type="number" name="">
     				<label>Expenditure used:</label><input type="number" name="">
     				<button type="button" class="btn-sm btn-primary">Add</button>
     			</div>
     			<div class="col">
     			<label>How to disseminate finelings:</label><input type="text" class="form-control" name="">
     			</div>
     			<div class="col">
     			<label>Major Achievements:</label><br>
     				<label>Monthly wise:</label><input type="text" class="form-control" name="target_date">
     				<button type="button" class="btn-sm btn-primary">Add</button>
     				<label>Overall:</label><input type="text" class="form-control" name="obs_txt">
     				<button type="button" class="btn-sm btn-primary">Add</button>
     			</div>
     			<div class="col">
     			<label>Report Submitted or not</label><select class="form-control"><option>Select</option></select>
     			</div>
     			<br>
     			<input type="submit" name="submit" value="submit">
     		</form>
     	</div>
     </div>
     			<br>
     			<br>
     			<br>
     
</body>
</html>