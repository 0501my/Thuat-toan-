function classifyPhoneNumber(phoneNumber: string[]) {
    let Viettel: string[] = [];
    let Mobifone: string[] = [];
    let Vinaphone: string[] = [];

    for (let i = 0; i < phoneNumber.length; i++) {
        switch (phoneNumber[i].substring(0, 3)) {
            case '086':
            case '096':
            case '097':
            case '098':
            case '032':
            case '033':
            case '034':
            case '035':
            case '036':
            case '037':
            case '038':
            case '039':
                Viettel.push(phoneNumber[i]);
                break;
        }
        switch (phoneNumber[i].substring(0, 3)) {
            case '088':
            case '091':
            case '094':
            case '083':
            case '084':
            case '085':
            case '081':
            case '082':
                Vinaphone.push(phoneNumber[i]);
                break;
        }
        switch (phoneNumber[i].substring(0, 3)) {
            case '089':
            case '090':
            case '093':
            case '070':
            case '079':
            case '077':
            case '076':
            case '078':
                Mobifone.push(phoneNumber[i]);
                break;
        }
    }
    console.log(`Số điên thoại Viettel: ${Viettel}`);
    console.log(`Số điên thoại Vinaphone: ${Vinaphone}`);
    console.log(`Số điên thoại Mobifone: ${Mobifone}`);

}

let listPhoneNumber: string[] = ['0861234567', '0961234567', '0371234567', '0851234567', '0811234567', '0931234567', '0771234567'];
classifyPhoneNumber(listPhoneNumber);