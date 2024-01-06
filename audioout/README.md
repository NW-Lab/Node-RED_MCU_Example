# Audio Out
npm i node-red-mcu\nodes\audioout node-red-mcuはMCUをダウンロードしたフォルダを指定
(npm i node_modules\@ralphwetzel\node-red-mcu-plugin\node-red-mcu\nodes\audioout)

audiooutの使い方は以下を参考
https://qiita.com/kitazaki/items/1236006d169e7185f52f


- msg.volume 音量
- msg.flush 終わり
- msg.wave wave_Streamer
- msg.sbc  sbc_Streamer
- msg.tones toneを出す。
- msg.resource　組み込み音源
- msg.samples 波形データを使う。

# tones
msg.tonesに音の高さと、長さの組み合わせの配列（JSON）を渡す。
msg.tones=[[440,200],[880,200]]

```
[
    {
        "id": "e74d546bc3ef8649",
        "type": "tab",
        "label": "AudioOut",
        "disabled": false,
        "info": "",
        "env": [],
        "_mcu": {
            "mcu": true
        }
    },
    {
        "id": "ab118d4dcf41cba0",
        "type": "inject",
        "z": "e74d546bc3ef8649",
        "name": "",
        "props": [
            {
                "p": "tones",
                "v": "[[440,100],[880,100]]",
                "vt": "json"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "_mcu": {
            "mcu": true
        },
        "x": 270,
        "y": 100,
        "wires": [
            [
                "b6d7308cc0221f49"
            ]
        ]
    },
    {
        "id": "b6d7308cc0221f49",
        "type": "audioout",
        "z": "e74d546bc3ef8649",
        "name": "",
        "volume": 1,
        "_mcu": {
            "mcu": true
        },
        "x": 480,
        "y": 100,
        "wires": []
    }
]
```


# 組み込みresourceを利用する場合

audioout/resourceにサンプル（Windows版。音源は効果音ラボをhttps://convertio.co/ja/mp3-wav/で変換したもの

以下のようなflowを作成し、export
```
[
    {
        "id": "c1179dd59cee4004",
        "type": "tab",
        "label": "audioout_resource",
        "disabled": false,
        "info": "",
        "env": [],
        "_mcu": {
            "mcu": true
        }
    },
    {
        "id": "be70b8d85950b837",
        "type": "inject",
        "z": "c1179dd59cee4004",
        "name": "",
        "props": [
            {
                "p": "resource",
                "v": "sound",
                "vt": "str"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "_mcu": {
            "mcu": true
        },
        "x": 170,
        "y": 100,
        "wires": [
            [
                "2f2d3f56d2ec42db"
            ]
        ]
    },
    {
        "id": "2f2d3f56d2ec42db",
        "type": "audioout",
        "z": "c1179dd59cee4004",
        "name": "",
        "volume": 1,
        "_mcu": {
            "mcu": true
        },
        "x": 340,
        "y": 100,
        "wires": []
    }
]
```
manifest.jsonにresourceを追加
```
{
  "build": {
    "MODULES": "c:\\pjt\\moddable\\modules",
    "MCUROOT": "C:\\Users\\tauchi\\.node-red\\node_modules\\@ralphwetzel\\node-red-mcu-plugin\\node-red-mcu",
    "REDNODES": "C:\\Users\\tauchi\\AppData\\Roaming\\npm\\node_modules\\node-red\\node_modules\\@node-red\\nodes"
  },
  "include": [
    "$(MCUROOT)/manifest_host.json"
  ],
  "resources": {
		"*": "./sound"
	},
  "modules": {
    "*": [
      "./main",
      {
        "source": "./flows",
        "transform": "nodered2mcu"
      }
    ],
    "~": []
  },
  "preload": [
    "flows"
  ],
  "config": {
    "noderedmcu": {
      "editor": true
    }
  }
}
```

sound.wav(16ｋHz,モノラル1ch、PCMS16LE)ファイルを作業フォルダに置く

# wave,sbc Streamerの場合
msg.wave msg.sbcにURLを指定