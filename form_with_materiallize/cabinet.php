<?php
	//var_dump($_COOKIE);
	if (!isset($_COOKIE['email']) OR trim($_COOKIE['email']) =='') {
		header('Location: index.html');
		exit;
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- IE browsers -->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="materiallize/materialize.min.css">
	<link rel="shortcut icon" href="favicon.png" type="image/png">
	<link rel="stylesheet" href="css/style.css">
	<title>User Cabinet</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col s12 center-align">
				<h2 class="user-cabinet-header">User Cabinet</h2>
			</div>
			<div class="col s12 center-align">
				<button id="logout" class="waves-effect waves-light btn-small"><i class="material-icons right">undo</i>Logout</button>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<form>
					<div class="row">
						<div class="input-field col s3 offset-s3">
							<input  id="signup-name" name="name" type="text" class="validate">
							<label class="active" for="signup-name">Name</label>
						</div>
						<div class="input-field col s3">
							<input  id="signup-pass" name="pass" type="text" class="validate">
							<label class="active" for="signup-pass">Password</label>
						</div>
						<div class="input-field col s6 offset-s3">
							<input  id="signup-birthday" name="birthday" type="text" class="datepicker">
							<label class="active" for="signup-birthday">Birthday</label>
						</div>
						<div class="col s3 offset-s3">
							<p>
								<label>
									<input name="sex" type="radio" class="with-gap" checked />
									<span>Male</span>
								</label>
							</p>
							<p>
								<label>
									<input name="sex" type="radio" class="with-gap" />
									<span>Female</span>
								</label>
							</p>
						</div>
						<div class="col s9 right-align">
							<button id="signup-submit" class="waves-effect waves-light btn-small"><i class="material-icons right">save_alt</i>Save</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	

<script src="materiallize/materialize.min.js"></script>
<script src="js/logout.js"></script>
<script src="js/ajax.js"></script>
<script src="js/user-data.js"></script>
</body>
</html>