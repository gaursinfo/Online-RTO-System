<html>
<head>
<title>Form | Transport Department, Uttar Pradesh</title>
<link href="style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" type="text/javascript" src="js/jquery-1.js" ></script>
<script language="JavaScript" type="text/javascript" src="js/submenu.js"  ></script>
<style>
.login
{
	
	margin-top:20px;
	opacity:1;
}
.login:hover
{
	opacity:1;
}
input:hover
{
	box-shadow:4pt 5pt 2pt #427fa2;
	background-color:#124d6f;
}
</style>
</head>
<body> 
<div id="header_wrapper">
	<div id="header">
    	<div id="logo">
            <a href="index.html"><img src="images/logo.png" width="62" height="80" alt="logo" /></a>
        </div> 
        <div id="site_title">
            <h2>Online RTO Management</h2>
			<h3>An Efficient Way To Reduce Time</h3>
        </div>
		<div id="header_right">
        	<div id="social_box">
                <ul>
					<li><div class="login"><a href="logout.php"><img src="images/logout.png" height="32" width="81"></a></div> </li>
                </ul>
                <div class="cleaner"></div>
			</div>   
        </div>
    </div>
</div>
<div id="menu_wrapper">
<div id="menu">
    <ul class="menu_ul">
        <li class="menu_li" style="width:100px;" ><a class="menu_a" href="index.html" >Home</a></li>
        <li class="menu_li" style="width:110px;" >
				<a class="menu_a" onmouseover="mopen('m1')" onmouseout="mclosetime()" href="aboutus_td.html">About Us </a>
				<ul id="sub_menu">
					<li><div id="m1" onmouseover="mcancelclosetime()" onmouseout="mclosetime()">
						<a href="#">Transport Department</a>
						<a href="#">Organization Structure</a>
						<a href="#">RTO/ARTO Office</a>
						<a href="#">Checkpost</a>
						<a href="#.html">Functions</a>
						</div>
					</li>
				</ul>
		</li>			
		<li class="menu_li" style="width:130px;" ><a class="menu_a" onmouseover="mopen('m2')" onmouseout="mclosetime()" href="act_rules.html">Acts & Rules</a>
				<ul id="sub_menu">
					<li>
						<div id="m2" onmouseover="mcancelclosetime()" onmouseout="mclosetime()">
						<a href="act_rules.html">Acts & Rules</a>
						<a href="notifications.html">Notifications & Circulars</a>
						</div>
					</li>
				</ul>
		</li>
        <li class="menu_li" style="width:110px;" ><a class="menu_a" onmouseover="mopen('m3')" onmouseout="mclosetime()" href="learning_license.html">Apply</a>
				<ul id="sub_menu">
					<li>
						<div id="m3" onmouseout="mclosetime()" onmouseover="mcancelclosetime()"  >
						<a href="learning_license.html">Learning Licence</a>
						<a href="driving_license.html">Driving Licence</a>
						<a href="vehicle_registration.html">Vehicle Registration</a>
						<a href="process_permit.html">Permit</a>
						</div>
					</li>
				</ul>
		</li>
        <li class="menu_li" style="width:100px;" ><a class="menu_a" onmouseover="mopen('m4')" onmouseout="mclosetime()" href="statistics_licence.html">Status</a>
				<ul id="sub_menu">
					<li>
						<div id="m4" onmouseout="mclosetime()" onmouseover="mcancelclosetime()" >
						<a href="status_licence.html">Learning Licence </a>
						<a href="status_licence.html">Driving Licence </a>
						<a href="status_vehicle.html">Vehicle Registration</a>
						<a href="status_permit.html">Permit</a>
						</div>
					</li>
				</ul>
		</li>
		<li class="menu_li" style="width:80px;" ><a class="menu_a" onmouseover="mopen('m6')" onmouseout="mclosetime()" href="faq_ll.html">FAQ</a>
				<ul id="sub_menu">
					<li>
						<div id="m6" onmouseout="mclosetime()" onmouseover="mcancelclosetime()" >
						<a href="faq_ll.html">Learning Licence</a>
						<a href="faq_dl.html">Driving Licence</a>
						<a href="faq_registration.html">Registration of Vehicle</a>
						<a href="faq_fitness.html">Fitness of Vehicle</a>
						<a href="faq_permit.html">Permit</a>
						<a href="faq_puc.html">PUC</a>
						</div>
					</li>
				</ul>
		</li>
		<li class="menu_li" style="width:90px;" ><a class="menu_a" href="contact_us.html">ContactUs</a></li>
    </ul><div class="cleaner"></div>		
</div>
<div id="ticker_wrapper">
		<div id="ticker">
			<marquee  onmouseout="start()" onmouseover="stop()" scrollamount="3" scrolldelay="85">
				<a href="#">Welcome to Transport Department Website.....</a>
			</marquee>
		</div>	
</div>
<div id="middle">
	
	<div id="content_left">
		<div class="col_w460">
    	<h2>Admin Panel</h2>
		<div class="Hline">&nbsp;</div>
		<div class="cleaner_h10"></div>	
		<table border="0" cellpadding="20" cellspacing="20">
		<tr>
			<td align="center"><a href="admin_display_request.php"><input style="height:40pt;width:90pt;font-size:20pt" type="button" value="Request"></a></td>
			<td align="center"><a href="admin_display.html"><input style="height:40pt;width:90pt;font-size:20pt" type="button" value="Display"></a></td>
			<td align="center"><a href="admin_display_update.php"><input style="height:40pt;width:90pt;font-size:20pt" type="button" value="Update"></a></td>
			<td align="center"><a href="admin_display_delete.php"><input style="height:40pt;width:90pt;font-size:20pt" type="button" value="Delete"></a></td>
		</tr>
		</table>
		</div>	
	</div>
<div class="cleaner"></div>			
</div>
<div id="footer_wrapper">
    <div id="footer">  
				<div class="footer_left">  
				<h6>Copyright &#169; Online RTO Management</h6>
				</div>
				<div class="footer_right">  
				<h6>Design and Developed by G-36</h6>
				<h6><a href="disclaimer.html">Disclaimer</a></h6>
				</div>
    </div> 
	<div class="cleaner"></div>
</div>
</body>
</html>