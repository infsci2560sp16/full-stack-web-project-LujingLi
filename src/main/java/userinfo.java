import com.google.gson.Gson;
import java.sql.Connection;

import java.util.HashMap;
import java.util.Map;

import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;
import java.text.SimpleDateFormat;
import static spark.Spark.get;


public class userinfo {

    Gson gson = new Gson();

    public userinfo() {
        getUserinfo();
    }

    private void getUserinfo() {
            String country [] = {"China","United States"};
            get("userinfo", (req, res) -> {

                Map<String, Object> attributes = new HashMap<>();
                attributes.put("username","User1");
                attributes.put("countries",country);

                return new ModelAndView(attributes, "userpage.ftl");
              }, new FreeMarkerEngine());
    }



}
