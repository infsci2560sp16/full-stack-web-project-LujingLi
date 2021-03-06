import java.util.HashMap;
import java.util.Map;
import java.util.Date;

import static spark.Spark.get;
import spark.Request;
public class MapServer {

  public MapServer(){
  //  CreateSampleData();
    getCountryInfo();
  }
  public HashMap<String,CountryInfo> CreateSampleData()
  {
    CountryInfo china = new CountryInfo("China","136,782,000","Asia","Beijing","Mandarin","RMB","Shanghai","Guangzhou","The Great Wall","the Palace Museum");
  	CountryInfo us = new CountryInfo("United States of America","322,369,319","North America","Washington, D.C.","English","United States dollar","New York City","Los Angeles","Grand Canyon","Statue of Liberty");
  	CountryInfo canada = new CountryInfo("Canada","36,048,521","North America","Ottawa","English and French","Canadian dollar","Vancouver","Toronto","Niagara Falls","Churchill");
    HashMap<String,CountryInfo> countryList = new HashMap<>();
			countryList.put(china.getcName(), china);
			countryList.put(us.getcName(), us);
			countryList.put(canada.getcName(), canada);
      return countryList;
  }


  private void getCountryInfo(){
    get("/api/mapInfo/:name", (req, res) -> {

      String name = req.params(":name");
      HashMap<String,CountryInfo> countryList = new HashMap<>();
      countryList = CreateSampleData();
      CountryInfo country = new CountryInfo();
       if(!countryList.containsKey(name))
       {

          country = null;
       }
       else
       {
          country = countryList.get(name);

       }

       String xml = "";
      // try {
       if(null != country)
       {
          xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                              "<Country>" +
                                  "<name>"+country.getcName()+"</name>" +
                                  "<population>"+country.getPopulation()+"</population>" +
                                  "<continent>"+country.getContinent()+"</continent>" +
                                  "<capital>"+country.getCapital()+"</capital>" +
                                  "<language>"+country.getLanguage()+"</language>" +
                                  "<currency>"+country.getCurrency()+"</currency>" +
                                  "<poi1>"+country.getPoi1()+"</poi1>" +
                                  "<poi2>"+country.getPoi2()+"</poi2>" +
                                  "<poi3>"+country.getPoi3()+"</poi3>" +
                                  "<poi4>"+country.getPoi4()+"</poi4>" +
                              "</Country>";
       }
      else
      {
         xml =    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                             "<Country>" +
                              "<name>information is not available yet</name>" +

                             "</Country>";
      }
    
      res.type("text/xml");
      return xml;
 });


  }

}
