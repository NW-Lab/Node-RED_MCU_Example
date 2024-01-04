# Node-RED_MCU_Example
これはNodeRED_MCUを使うためのサンプルです。

## Node-REDのノードのインストール
.node-redのフォルダで実行します。（）はPluginをインストールした場合の方法例
### MCU
node-red-mcu\nodes\mcu
（Pluginをインストールすると同時にインストールされます。ただしPluginのインストールや更新が無いと、MCU-Nodeの更新されません）
### Audio Out
npm i node-red-mcu\nodes\audioout node-red-mcuはMCUをダウンロードしたフォルダを指定
(npm i node_modules\@ralphwetzel\node-red-mcu-plugin\node-red-mcu\nodes\audioout)

soundoutの使い方は以下を参考
https://qiita.com/kitazaki/items/1236006d169e7185f52f
