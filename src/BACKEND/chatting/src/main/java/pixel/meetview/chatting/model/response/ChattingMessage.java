package pixel.meetview.chatting.model.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private static final long serialVersionUID = 1L;

    private int key; // To do(Yongseok.choi) : Need to make unique message key(id)
    private String content;
    private String userId;
    private String sendDate;
    private Long timeStamp;
    private String fileName;
    private boolean file;// if file, this is true
}
