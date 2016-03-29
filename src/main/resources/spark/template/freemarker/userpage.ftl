<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
  <title> User Page </title>
</head>
<body>
<div id = "header">
  <h1><a href="index.html"> My Travel Map <span>Explore the world</span></a></h1>
  <ul id="navigation">
    <li >
      <a href="index.html">Home</a>
    </li>
    <li>
      <a href="map.html">Create My Map</a>
    </li>
    <li>
      <a href="mapInfo.html">Write my diary</a>
    </li>
    <li >
      <a href="login.html"> Login</a>
    </li>
    <li class = "current">
      <a href="userpage.ftl"> Personal page</a>
    </li>
  </ul>
</div>
<div id="body">

  	<h2><b>Hello, ${username}</b></h2>
    <#if country == "">
    <div id ="userinfo">You haven't marked any location yet!</div>
    <#else >

    <ul>
      <# list countries as country>
      <li> ${country}</li>
    </ul>

      </#list>
    </div>
    </#if>
</div>

</body>
</html>
