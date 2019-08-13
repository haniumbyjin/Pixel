package pixel.meetview.chatting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChattingRoom implements Serializable {
    private int room_uid;
    private String room_name;
    private String url;
    private int master_uid;

    @JsonIgnore
    private List<ChattingMessage> chattingMessages;

}