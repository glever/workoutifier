package be.glever.workoutifier;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

public class TestObjectSerialization {
    @Test
    public void testSerDeser() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper().findAndRegisterModules().enableDefaultTyping();
        DeviceStatusRequestMsg deviceStatusRequestMsg = new DeviceStatusRequestMsg();
        String deviceStatusRequestJson = mapper.writeValueAsString(deviceStatusRequestMsg);
//        System.out.println(deviceStatusRequestJson);
        Message message = mapper.readValue(deviceStatusRequestJson, Message.class);
//        System.out.println(message.getClass());


        String responseString = mapper.writeValueAsString(new DeviceStatusResponseMsg().device(new Device().status(Device.StatusEnum.CONNECTED)));
//        System.out.println(responseString);
        Message responseParsed = mapper.readValue(responseString, Message.class);
//        System.out.println(responseParsed.toString());
    }

}
