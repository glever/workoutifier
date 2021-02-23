package be.glever.workoutifier.tstjackson;

import be.glever.workoutifier.DeviceStatusRequestMsg;
import be.glever.workoutifier.DeviceStatusResponseMsg;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

//@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type")
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type", visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = ChildClass.class, name = "kindje"),
})
public class BaseClass {
    private String baseProperty;

    public BaseClass() {
    }

    public String getBaseProperty() {
        return baseProperty;
    }

    public void setBaseProperty(String baseProperty) {
        this.baseProperty = baseProperty;
    }
}
