export const getDirection = (textDirection)=>{
    switch (textDirection){
      case "ltr":
        return "ltr";
      default:
       return textDirection;
    }
}
