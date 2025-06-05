function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation)
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}
function distanceTravelledInFeet(pickupLocation, hqLocation) {
    return Math.abs(pickupLocation - hqLocation) * 264;
}

function calculatesFarePrice(start,destination){
    const distance = Math.abs(destination - start)*264;

    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000){
        return (distance-400) * 0.02;
    } else if (distance <= 2500){
        return 25;}
        else if (distance > 2500)
         { return 'cannot travel that far'};
}
