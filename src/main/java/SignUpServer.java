import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import java.util.Date;

import static spark.Spark.get;


public class SignUpServer {

    Gson gson = new Gson();

    public SignUpServer() {
        checkUser();
    }
    User user = new User();
// set default userlist
    String [] userlist = {"a","b","c","d"};

    private void checkUser() {
      get("/api/checkuser", (req, res) -> {
        //console.log(req.params);
        String username = req.params;
        //String username =request
          // Map<String, Object> data = new HashMap<>();
          // data.put("title", "Professor");
          // data.put("name", "Brian");
          // data.put("description", "INFSCI 2560");
          // data.put("profession", "Education");
          //return data;
      }, gson::toJson);

        get("/api/time/now", (req, res) -> {
            Map<String, Object> data = new HashMap<>();
            data.put("currentTime", new Date());
            return data;
        }, gson::toJson);

        get("/api/time/now.xml", (req, res) -> {
            Map<String, Object> data = new HashMap<>();
            data.put("currentTime", new Date());
            return data;
        }, gson::toJson);


  }
}
