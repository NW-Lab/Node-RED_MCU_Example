# ESP32/M5Dial
Platform esp32/m5dial

m5stampS3+周辺機器で構成されています。

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|×|

# Feature
| | | Moddable | NodeRED MCU |備考|
|:--|:--|:--: |:--:|:--|
| MCU | ESP32-S3(Flash 8MB) | 〇 | 〇 | | 
|Screen(240x240)| GC9A01| 〇 |Dashboard||
|Touch driver|FT3267||Dashboard||
|Dial|Rotary Encoder||pulse count<br/>(SignalPin:40,ControlPin:41)|同時に4ノッチ動くみたい|
|RFID|WS1850S||||
|RTC|BM8563||clock<br/>(NXP PF8503,Data:11,Clock:12)|BM8563はPF85563の互換品です|
|Buzzer|||PWM out(Pin:3)||
|Wake Button|||DigitalIn<br/>(Input,Pin:10)|Bottom|
|(Stamp)Button|BTN0|〇|〇||
|(Stamp)RGB LED(NeoPixel)|WS2812C-2020|〇|Neopixel||


# Pin Map
https://docs.m5stack.com/en/core/M5Dial

## Button(StampS3)
| btn |
| :---: |
| 0 |

## RGB LED(StampS3)
| SK_DIN |
| :---: |
| 21 |

## Buzzer 
PWM Out
| BZ |
| :---: |
| 3  |

## Encoder 
| A | B |
|:---:|:---:|
| 41 | 40 |

## Internal I2C
- RTC8563
- RFID WS1850S RST:G8,IRQ:G10

| SCL | SDA |
| :-: | :-: |
| 12  | 11  |

## Grove Port A
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 15 | 13 | 5V  | GND |

## Grove Port B
| IN | OUT | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 1  | 2  | 5V  | GND |

# 参考
DashBoardは6X6ぐらいが良さそう。
DashBordサイドバーでタイトルを消すと良い。