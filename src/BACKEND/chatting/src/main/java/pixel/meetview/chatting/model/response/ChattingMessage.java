package pixel.meetview.chatting.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChattingMessage implements Serializable {
    private String content;
    private String user_id;
    private String send_date;
    private Long timeStamp;
}
