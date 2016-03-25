import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;
import java.util.Date;

import static spark.Spark.get;
import spark.Request;

public class SignUpServer {

    Gson gson = new Gson();

    public SignUpServer() {
        checkUser();
    }
  //  User user = new User();
// set default userlist
    String [] userlist = {"a","b","c","d"};

    private void checkUser() {
      get("/api/checkuser/:name", (req, res) -> {

        String username = req.params(":name");
          
        boolean result = true;
        for(int i = 0;i < userlist.length; i++)
        {
          if(userlist[i] == username)
            result = false;

        }
        //return result;

          Map<String, Object> data = new HashMap<>();
          data.put("success", result);

          return data;
      }, gson::toJson);


  }
}
