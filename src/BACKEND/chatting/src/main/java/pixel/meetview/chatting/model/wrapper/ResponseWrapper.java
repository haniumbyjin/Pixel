package pixel.meetview.chatting.model.wrapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pixel.meetview.chatting.model.enums.ResponseStatusCode;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResponseWrapper<T> {

    private int code;
    private String message;
    private T data;

    public ResponseWrapper (ResponseStatusCode resStatusCode) {
        this.code = resStatusCode.getCode();
        this.message = resStatusCode.getMessage();
    }

    public ResponseWrapper (ResponseStatusCode resStatusCode, T t) {
        this.code = resStatusCode.getCode();
        this.message = resStatusCode.getMessage();
        this.data = t;
    }


}