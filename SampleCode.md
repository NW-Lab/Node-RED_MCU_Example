#シリアルポートの例
https://qiita.com/mshioji/items/a750a5d713ab4d54c4cf
```
// Code added here will be run once
// whenever the node is started.

let serial = new device.io.Serial({
    ...device.Serial.default,
    baud: 115200,
    port: 2,
    receive: 16,
    transmit: 17,
    format: "buffer",
    onReadable: function (count) {
        let  msg = {};
        msg.payload = String.fromArrayBuffer(this.read());
        msg.payload = msg.payload.trimEnd();
        node.send(msg);
    },
});
flow.set('serial', serial); // provide 'serial' for 'mcu serial out' node.
```