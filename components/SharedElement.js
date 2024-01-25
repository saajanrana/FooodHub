import {SharedTransition,withSpring} from 'react-native-reanimated';


const SPRING_CONFIG = {
    mass:1,
    satisfies:100,
    damping:200
}

export const SharesdElement = SharedTransition.custom((values) =>{
   'worklet';
   return {
    height:withSpring(values.targetHeight,SPRING_CONFIG),
    width:withSpring(values.targetWidth,SPRING_CONFIG),
    originX:withSpring(values.targetGlobalOriginX,SPRING_CONFIG),
    originY:withSpring(values.targetGlobalOriginX,SPRING_CONFIG),
   }

})