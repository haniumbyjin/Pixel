package pixel.meetview.chatting.model.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private String user_id;
    private String nickname;
    private String password;
    //user_image

    @JsonIgnore
    private List<User> friends;

    @JsonIgnore
    private List<ChattingRoom> joinRooms;

}
