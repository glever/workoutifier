package be.glever.workoutifier;

import be.glever.workoutifier.tstjackson.BaseClass;
import be.glever.workoutifier.tstjackson.ChildClass;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.jsontype.NamedType;
import org.junit.jupiter.api.Test;

public class TestObjectSerialization {


    @Test
    public void testSerDeser() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        ChildClass child = new ChildClass();
        child.setChildProperty("child property");
        child.setBaseProperty("base property");
        String childjson = mapper.writeValueAsString(child);
        System.out.println(childjson);
        System.out.println(mapper.readValue(childjson, BaseClass.class));

        DeviceStatusRequestMsg deviceStatusRequestMsg = new DeviceStatusRequestMsg();
        String deviceStatusRequestJson = mapper.writeValueAsString(deviceStatusRequestMsg);
        System.out.println(deviceStatusRequestJson);
        Message message = mapper.readValue(deviceStatusRequestJson, Message.class);
        System.out.println(message.getClass());


        String responseString = mapper.writeValueAsString(new DeviceStatusResponseMsg().device(new Device().status(Device.StatusEnum.CONNECTED)));
        System.out.println(responseString);
        Message responseParsed = mapper.readValue(responseString, Message.class);
        System.out.println(responseParsed.toString());
    }



}
