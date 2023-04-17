<?php 
echo "<script>location.href='index.php';alert('Incorrect UserName or Password Supplied');</script>";
include('db.php');

function varspchar($string)
{
	$cmp=array('!','$','%','^','&','*','{','}','<','>','`','~','`','~','\'',';','\\','=');
	$val=$string;
	foreach($cmp as $ind=>$char )
	{
		$pos=strpos($val,$char);
		if ($pos!==false)
		{
		headers();
		break;

		}
	}

}
function headers()
	{
    echo "<script>location.href='login.php';alert('Incorrect UserName or Password Supplied');</script>";
    exit;
	}

function GetRandom()
{
$sLeft=rand(1,99999);
if (strLen($sLeft)<5)
{
	$sLeft=(5-strLen($sLeft)).$sLeft;
}
$sRight=rand(1,99999);
	if (strLen($sRight)<5)
	{
		$sRight=(5-strLen($sRight)).$sRight;
	}
$sSeed = $sLeft.".".$sRight;
return $sSeed;
}
    
    
$sValidEmailAddress=$_REQUEST['email'];
$sValidEmailAddress=trim($sValidEmailAddress);
$pwd=$_REQUEST['pass'];
$sValidHash=$_REQUEST['hash'];

if (strlen($_REQUEST['email'])>150)
{
	headers();
}

if (strlen($_REQUEST['hash'])>150)
{
	headers();
}

if ($_REQUEST['email']==="")
{

	headers();
}

if ($_REQUEST['hash']==="") 
{

	headers();
}
varspchar($_REQUEST['email']);
varspchar($_REQUEST['hash']);

loginChk($sValidHash,$sValidEmailAddress);      

function loginChk($pwd,$uname)
{
	$conn1= getconnection();

	$uname=trim($uname);

   if (strpos($uname,"?")|| strpos($uname,"<")|| strpos($uname,">")|| strpos($uname,"!")|| strpos($uname,"$")|| strpos($uname,"%")|| strpos($uname,"^")|| strpos($uname,"&")|| strpos($uname,"*")|| strpos($uname,"(")|| strpos($uname,")")|| strpos($uname,"+")|| strpos($uname,"|")|| strpos($uname,"'")){
		headers();
    }

    $sql = "select password, uname from user where uname='$uname' ";
    $result = mysqli_query($conn1, $sql);
	if((mysqli_num_rows($result))<=0)
	{
	   	headers();
		exit;
	}
	while($row = mysqli_fetch_assoc($result))
	{
		$DbPass=$row['password'];
		$DbUname=$row['uname'];
		$DbUname=trim($DbUname);
	}
	if($DbUname!=$uname)
	{
		headers();
		exit;
	}
	if($DbPass===$pwd)
	{
		$rand=GetRandom();
		$_SESSION['loginid']=$rand;
		setcookie("Uses",$rand,0);
		setcookie("Usesid",session_id(),0);
		$EncTok=GetRandom();
		$_SESSION['EncTok']=$EncTok;
		$_SESSION['user_id']=$uname;
		header("Location:add.php?EncHid=$EncTok");
	}
	else
	{
		headers();
		exit;
	}

}
?>


