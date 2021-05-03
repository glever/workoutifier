# Event Architecture
This page list the interactions between client, server and j-antplus.  
It will not be comprehensive, but should provide enough detail to understand the flow.

## Ant library
Builds on spring reactor.

## Server
System should be inherently _async_ event-driven.

### Web sockets for client communication
#### Commands
Commands are incoming. 1 ws endpoint to accept all commands.  
Translates each command to a domain event type.  
Probably 1-1 mapping, but we get separation of concerns.

1 or more ApplicationListeners per logical group of commands like ANT device management (dongle connection, device scanning / pairing, FE-C control,..).
Each command results in an event (at very least an ack).
==> Command has a correlation id (UUID?).

#### Events
Events are outgoing.  
They are either a reaction on a command (takes over the correlId), or an event originating in the dongle ( new UUID? or hash on "UK" per event? The latter would reduce events sent to browser).

## Client
App uses ngrx, everything is in place.

## Interactions
Legend:  
->: client-> server  
<-: server -> client  

### USB Dongle Connection
For simplicity:dongle may be connected, which is the major usecase.    
-> ListDonglesCommand  
<- ListDonglesResponse, per device: identifying info and connection state.  
-> ConnectDeviceCommand(Device id)  
<- ConnectDeviceResponse(Result code: ok/nok)

### Device Scanning
TODO Currently unsupported by j-antplus.
Initial implementation is "open hrm channel" without the scanning part.

### Open HRM
-> ConnectToHrmCommand  
<- ConnectToHrmResponse 
<- HrmEvent
<- HrmEvent
<- ....

# Disconnect From Hrm
... etc