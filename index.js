function shout(string) {
    return string.toUpperCase(); }
    shout(hello)

    function whisper(string) {
        return string.toLowerCase(); }
        whisper(hello)

        function logShout(string) {
        console.log("hello".toUpperCase())
        }
        logShout('hello')

        function logWhisper(string) {
        console.log("HELLO".toLowerCase())
        }
        logWhisper('HELLO')

        function sayHiToHeadphonedRoommate(string) {
        if (string.toLowerCase()===string){
            return "I can't hear you!";    
        } if (string.toUpperCase()===string){
            return "YES INDEED!";   
        } if (string==="Let's have dinner together!"){
            return "I would love to!";
        }
    }
        console.log(hello)
