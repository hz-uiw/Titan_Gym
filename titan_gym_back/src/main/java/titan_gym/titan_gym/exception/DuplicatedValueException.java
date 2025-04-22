package titan_gym.titan_gym.exception;

import lombok.Getter;

import java.util.List;

@Getter
public class DuplicatedValueException extends RuntimeException{
    private List<FieldError> fieldsErrors;

    public DuplicatedValueException(List<FieldError> fieldsErrors) {
        super("Duplicated Error");
        this.fieldsErrors = fieldsErrors;
    }
}
