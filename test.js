const { Mixin } = require('mixin-node-sdk')

let client = new Mixin({
    "client_id": "c26ec48e-d626-4106-9f30-ff6a69783369",
    "client_secret": '52e02740d0ec12ff179c618adad70150647bd802aebd0a6a1e2c344fb9fa4ce0',
    "pin": "789086",
    "session_id": "3cd78d8e-ddd0-4eaa-b78e-cfd4a5521e6a",
    "pin_token": "VX8NPQaYGQYtDVYjDtAb2S9IBfsJXEeaLnpr9YLDJ2RGeA1W+mdAHcpWGULiX6N2J7y/SAFZ91ILQtn3EH77taX5mNgocfJd2JunlArLCWJ7lJg/AvIh8IX12+/663s6eKFzIxauQL0vLEVLNKIsmArg1tz8VDNllzONlCKwDvY=",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\r\nMIICXQIBAAKBgQCeeICSpTfJu9RNVqc5QHpUgU1jLq7D70ngPY49+vlh1j/aEEvw\r\nmUnPyWfuFvlYl1nahjHnkDtzOwVqNVHZbM+ec1l/+JrXFtdLqAOA5EJgjfJs1/pU\r\n+amMw38+64awHZfvhjZjAiL6Uodvjyf2f71lSeKcgjAPWLX7dSfHaDihuQIDAQAB\r\nAoGAZZ9q/B99Xh3YcFwQUrOZfxWINgFay4Vo/6cZz39hay9EtSdcO4dhgSFsR49u\r\nCTTNx0flOtUQer2vpENbIK4ZmUTa8XHICAkJRhHUCk36pywPeSOiGQO9MoAHlrt5\r\nVbQ9cfX+1A6wsxlmC4HfG2TMjCgR8i3zcSRtL6CLbWwnAzECQQDZHPn0iqn3+7H0\r\ncJLFMbX7+s/yQMg+leVB9I9Oy/PckmR3S1ynNB1pdevUj/z8vrU+abrNCjjDmp8M\r\nSfP59woVAkEAutqqIgxBKqrA4VZekrim398OuzllhA11PsGFgjUYxYZ4jNbTX6+O\r\nnjk0yS26axlWZSLF8alLYmUF49/UhHsWFQJAcgfzDEpMDTAH/j+mBqYeU/MehrkZ\r\nsy1dVO/S2Orr8Px+gd12E2eezwYdT+40TLcJUHeNoiVtPOcYBAdPegkTJQJBAK8F\r\noTURO31GwjKQHzfZhF3QZtESOzeND5R/2pmTOKfUhFiP5SAMpk8okHwcvDATZKyI\r\n/NaW2AjLTdAb2claLd0CQQDEDHW4zeCI2elWhoHpdFLZqqH/UnqUA4nELGwpARGr\r\nH1wJjI7J7veKR0TxKX6xll8knnWo2SIN67Sj4QAHEiF9\r\n-----END RSA PRIVATE KEY-----\r\n"
})


let recipient_id = 'e8e8cd79-cd40-4796-8c54-3a13cfe50115'
let data = `
## liuzemei
#### [**1 new commit**](https://github.com/liuzemei/test3/commit/cf03469aec7b8cfd9b00c11a76b137adb97cfee7) pushed to [**master**](https://github.com/liuzemei/test3)
> [**cf03469a**](https://github.com/liuzemei/test3/commit/cf03469aec7b8cfd9b00c11a76b137adb97cfee7) - tainxiexiajif

[**liuzemei/test3**](https://github.com/liuzemei/test3)
`
client.send_message({
    recipient_id, data, category: 'PLAIN_POST'
})