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
    private String userId;
    private String sendDate;
    private Long timeStamp;
    private boolean isFile;// if file, this is true
}
