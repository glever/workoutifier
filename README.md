# Workoutifier
(worst name ever, may change to Trainificationalizer)  

## Goal 
Integrate j-antplus library in a streaming server/frontend application.

## Technology
spring boot / angular

## Project structure
Single maven module, handling
* Spring Boot build (standard mvn setup)
* Angular npm build using frontend plugin and copy of app resources to target directory using resources plugin.
    
## Backend
Spring boot  
Some way of bridging j-antplus WebFlux design to STOMP endpoint(s) (to be investigated)  
Performs state management of AntPlusDevices and -Channels, streams these changes to STOMP subscribers.  
Maps j-antplus messages to "higher level" messages

## Frontend
Angular UI  
NGRX  
Initiates Ant discovery on server side (usb devices, Channels, etc)  
Subscribes / unsubscribes from AntChannels  


## Build
`mvn clean install` for full build  
`mvn package -DskipNpm` to skip the angular build

## Development setup
### Tooling
aiming to always have latest versions  
Latest jre (13 at time of writing)  
maven  
node/npm  
j-antplus library in local mvn repo.


### Backend
Launch ``be.glever.workoutifier.WorkoutifierApplication`` from IDE with spring profile 'local', this will add the 
angular dist folder to the static files location. Handy for easily simulating prod builds.  
However, in dev mode the angular dev server would be used 

### Frontend
``npm run start`` will launch angular in dev mode.
