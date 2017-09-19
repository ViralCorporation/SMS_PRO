function getMsg(){
    return $("#mens_sended").val();
}
function getNumberSend(){
    return $("#number_sended").val();
}
function getNumberReceive(){
    return $("#number_receive").val();
}

function sendMsg(num_sending, num_receive, msg){

}

(function () {
    $("#send_button").addEventListener(onclick, funtion() {
        sendMsg(getNumberSend, getNumberReceive, getMsg);
    });
});
