# ESP32/M5STACK Fire
Platform esp32/m5stack_fire

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash16MB+PSRAM8MB) | 〇 | 〇 | 〇 |  
| Display | ILI9342C(320x240) | 〇   | 〇   | 〇   |
|Power Controler|IP5306||||
|3-Axis Geomagnetic Sensor|BMM150|||
|6-Axis MotionTracking Sensor|SH200Q||||
|6-Axis MotionTracking Sensor|MPU6886|||
| Button  | A/B/C | 〇  | 〇  | 〇  |
| Speaker |     | 〇 | 〇 | 〇 |
| MIC |     |  |  |  |
| LED BAR(NEO Pixel) |     | 〇 | 〇 | 〇 |
SH200Q(初期バージョン),MP6886の2バージョンある
# Pin Map
https://docs.m5stack.com/en/core/fire

## Button 
Digital In ( Pull Up )
| Btn A | Btn B | Btn C |
| :---: | :--: | :--: |
| 39  |38  | 37 |

## Speaker
| DA Pin |
| :----: |
| 25     |
## MIC
| AD Pin |
| :----: |
| 34     |
## LED Bar
| Neopixel Sig Pin |
| :----: |
| 15     |

## Internal I2C
- 6-Axis MotionTracking Sensor MPU6886:0x68
- 3-Axis Geomagnetic Sensor BMM150:0x10
- 3-Axis Geomagnetic Sensor SH200Q:0x6c
| SCL | SDA |
| :-: | :-: |
| 22  | 21  |


## TF Card
| MOSI | MISO | CLK | CS  |
| :--: | :--: | :-: | :-: |
| 23   | 19   | 18  | 4   |

## Grove A Port
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 22  | 21  | 5V  | GND |
## Grove B Port
| ADC(AnalogIn) | DAC(AnalogOut) | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 36  | 26  | 5V  | GND |
## Grove C Port
| RXD | TXD | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 16  | 17  | 5V  | GND |
