package pixel.meetview.chatting;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import pixel.meetview.chatting.model.response.ChattingRoom;
import pixel.meetview.chatting.model.response.User;

import java.util.ArrayList;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class RoomControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void createRoomTest() throws Exception {
        ArrayList<User> users = new ArrayList<>();
        User user = User.builder()
                .user_id("test_id")
                .build();
        User user2 = User.builder()
                .user_id("test_id2")
                .build();
        users.add(user);
        users.add(user2); // client에서는 이렇게 넘어가겠지만 List에는 JsonIgnore를 해놓아서 test불가

        //채팅방 참여자목록

        ChattingRoom room = ChattingRoom.builder()
                .room_name("test room")
                .joinUsers(users)
                .master_id(user.getUser_id())
                .build();

        String json = asJsonString(room);
        System.out.println("json string: "+json);

        mockMvc.perform(post("/createroom")
                .content(json)
                .contentType(MediaType.APPLICATION_JSON_UTF8)) // content의 type을 명시합니다.
                .andExpect(status().isOk())
                .andDo(print());

    }

    public String asJsonString(Object obj) {
        try {
            final ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
