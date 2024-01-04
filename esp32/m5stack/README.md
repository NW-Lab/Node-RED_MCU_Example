# ESP32/M5STACK
Platform esp32/m5stack

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32 | 〇 | 〇 | 〇 |  
| Display | ILI9342C | 〇   | 〇   | 〇   |
|Power Controler|IP5306||||
| Button  | A/B/C | 〇  | 〇  | 〇  |
| Speaker |     | 〇 | 〇 | 〇 |

# Pin Map
https://docs.m5stack.com/en/core/basic

## Button 
Digital In ( Pull Up )
| Btn A | Btn B | Btn C |
| :---: | :--: | :--: |
| 39  |38  | 37 |

## Speaker
| DA Pin |
| :----: |
| 25     |

## TF Card
| MOSI | MISO | CLK | CS  |
| :--: | :--: | :-: | :-: |
| 23   | 19   | 18  | 4   |

## Grove A Port
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 22  | 21  | 5V  | GND |

# 注意
PortAにI2C以外の機器をつなげると内部のI2Cデバイスも利用できなくなります。（なので実質I2C専用です）
I2C以外は、Bottomを利用するか、M5GOを使用します。

