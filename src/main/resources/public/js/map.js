d3.select(window).on("resize", throttle);

var zoom = d3.behavior.zoom()
    .scaleExtent([1, 9])
    .on("zoom", move);


var width = document.getElementById('showmap').offsetWidth;

var height = width / 2;

var topo,projection,path,svg,g;

var graticule = d3.geo.graticule();

var tooltip = d3.select("#showmap").append("div").attr("class", "tooltip hidden");

var MName = [];
var Mlist = [];

//var color = d3.scale.threshold().range(["#ffff99","#ffe680", "#ffd733", "#e6b900", "#ffd1b3", "#ffb280", "#ff934d", "#ff741a", "#ff5b33", "#ff3200","#b32300","#661400"])


setup(width,height);

function setup(width,height){
  projection = d3.geo.mercator()
    .translate([(width/2), (height/2)])
    .scale( width / 2 / Math.PI);

  path = d3.geo.path().projection(projection);

  svg = d3.select("#showmap").append("svg")
      .attr("width", width)
      .attr("height", height)
      .call(zoom)
      .on("click", click)
      .append("g");

  g = svg.append("g")
         .on("click", click);

}

d3.json("data/world-topo-min.json", function(error, world) {

  var countries = topojson.feature(world, world.objects.countries).features;

  topo = countries;
  draw(topo);

});




function draw(topo) {

  svg.append("path")
     .datum(graticule)
     .attr("class", "graticule")
     .attr("d", path);


  g.append("path")
   .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
   .attr("class", "equator")
   .attr("d", path);


  var country = g.selectAll(".country").data(topo);

  country.enter().insert("path")
      .attr("class", "country")
      .attr("d", path)
      .attr("id", function(d,i) { return d.id; })
      .attr("title", function(d,i) { return d.properties.name; });
      country
      .style("fill", function(d){
       // var color;
        var color2;
        console.log(MName);
        for( var j in MName){
          //  color = MName[j];
            if(MName[j] == d.id)
             {color2 = "#FF8C00";}
      }
      return color2;

      });


  //offsets for tooltip
  var offsetL = document.getElementById('showmap').offsetLeft+20;
  var offsetT = document.getElementById('showmap').offsetTop+10;

//offsets for tooltip2
  var offsetL2 = document.getElementById('showmap').offsetLeft+10;
  var offsetT2 = document.getElementById('showmap').offsetTop;

  var mouse;
  //tooltips
  country.on("mousemove", function(d,i) {

       mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

      tooltip.classed("hidden", false)
            .style("left", (d3.event.pageX+20) + "px")
            .style("top", (d3.event.pageY - 28) + "px")
             //.attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
             .html(d.properties.name + "<br/>" + "Have been there? " +'<a href= "mapInfo.html">' +" Write a diray" +
        "</a>" );

      })

      .on("click",function(d,i){
                   d3.select(this)
                   .style("fill","#FF8C00");
                   var id = d.id;
                   var name = d.properties.name;
                   MName.push(id);
                   Mlist.push(name);
                   console.log(MName);
                   console.log(Mlist);
                  // alert(MName);

                  //ajax

                  $.ajax({
                      type: "GET",
                      url: "/api/mapInfo/"+name,
                      data: name,
                      dataType: "xml",

                      success: function (result) {

                                console.log(result);
                                var cname = $(result).find("name").first().text();
                                if(cname !="information is not available yet")
                                {
                                var population = $(result).find("population").first().text();
                                var continent = $(result).find("continent").first().text();
                                var capital = $(result).find("capital").first().text();
                                var language = $(result).find("language").first().text();
                                var currency = $(result).find("currency").first().text();
                                var poi1 = $(result).find("poi1").first().text();
                                var poi2 = $(result).find("poi2").first().text();
                                var poi3 = $(result).find("poi3").first().text();
                                var poi4 = $(result).find("poi4").first().text();
                                $("#countrySum").html("Description: <p>Country Name: "+cname+";</p>"+
                                                      "<p>Population: "+population+";</p>"+
                                                      "<p>Continent: "+continent+";</p>"+
                                                      "<p>Capital: "+capital+";</p>"+
                                                      "<p>Language: "+language+";</p>"+
                                                      "<p>Currency: "+currency+";</p>"+
                                                      "<p>Point of Interest: "+poi1+";</p>"+
                                                      "<p>Point of Interest: "+poi2+";</p>"+
                                                      "<p>Point of Interest: "+poi3+";</p>"+
                                                      "<p>Point of Interest: "+poi4+";</p>");
                                }else{
                                  $("#countrySum").html("Description: <p>"+cname+"</p>");

                                }

                                            },

                      //If there was no resonse from the server
                      error: function(jqXHR, textStatus, errorThrown){
                           console.log("Something really bad happened " + textStatus);
                            $("#countrySum").html(jqXHR.responseText);

                      }



                  });


         });





}


function redraw() {
  width = document.getElementById('showmap').offsetWidth;
  height = width / 2;
  d3.select('svg').remove();
  setup(width,height);
  draw(topo);
}


function move() {

  var t = d3.event.translate;
  var s = d3.event.scale;
  zscale = s;
  var h = height/4;


  t[0] = Math.min(
    (width/height)  * (s - 1),
    Math.max( width * (1 - s), t[0] )
  );

  t[1] = Math.min(
    h * (s - 1) + h * s,
    Math.max(height  * (1 - s) - h * s, t[1])
  );

  zoom.translate(t);
  g.attr("transform", "translate(" + t + ")scale(" + s + ")");

  //adjust the country hover stroke width based on zoom level
  d3.selectAll(".country").style("stroke-width", 1.5 / s);

}



var throttleTimer;
function throttle() {
  window.clearTimeout(throttleTimer);
    throttleTimer = window.setTimeout(function() {
      redraw();
    }, 200);
}

// ajax






// mouse click

function click() {
  var latlon = projection.invert(d3.mouse(this));

  console.log(latlon);


}
function createMap()
{
  redraw();
}
