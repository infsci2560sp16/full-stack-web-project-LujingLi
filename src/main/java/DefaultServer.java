
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;
import java.util.Date;

import static spark.Spark.get;
import static spark.Spark.post;
import spark.Request;

public class DefaultServer {

    Gson gson = new Gson();

    public DefaultServer() {

    }
    private void setDefault() {
      post("/api/about", (req, res) -> {
          Map<String, Object> data = new HashMap<>();
          data.put("name", "Lujing Li");
          data.put("Email", "lul36@pitt.edu");
          return data;
      }, gson::toJson);
    }





}
