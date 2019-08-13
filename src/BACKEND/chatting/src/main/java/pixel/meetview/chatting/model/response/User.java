package pixel.meetview.chatting.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private int user_uid;
    private String user_id;
    private String nickname;
    private String password;
    //user_image
}
