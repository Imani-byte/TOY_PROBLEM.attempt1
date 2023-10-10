//i chose to lable my function SpeedDetector
function SpeedDetector (speed) {
    const maxamountofdemeritpoints = 12
    const speedlimit = 70
    const speedoverlimit = speed - speedlimit
    //this to  make sure the amount of speed exceed is recorded wrong
    const demritpoints = speedoverlimit / 5
    //i used this format since 1 demerit is given per 5km over the speed limit

    if (speed <= speedlimit) {
        console.log("OK")
        //in this script i used console.log instaed of return because it will display information in the console which will be used for logging which is need to get totals of the demerit points
    } else if (demritpoints = maxamountofdemeritpoints) {
        console.log("License suspended")
    } else {
        console.log('Points: ${demeritpoints}')
        // the use of the $ sign is to ensure that the demerit points variable values are inserted only
    }
}
