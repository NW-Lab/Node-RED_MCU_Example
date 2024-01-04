# ESP32/M5STACK Core2 & Core2AWS
Platform esp32/m5stack_core2

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU |備考|
|:--|:--|:--: |:--: |:--|
| MCU | ESP32(Flash16MB+PSRAM8MB) | 〇 | 〇 ||  
| Display |ILI9342C(320x240)| 〇|Dashboard||
| Touch Screen | FT6336U |〇|DashBoard||
|Power Controler|AXP192||||
|Vibration motor|||||
|3-Axis Geomagnetic Sensor|BMM150|||
|6-Axis MotionTracking Sensor|MPU6886|||
| Speaker |NS4168|  |  |  |
| MIC |SPM1423|  |  |  |
| RTC |BM8563|  |  |  |
|(AWS)Hardware encryption chip|ATECC608B-TNGTLSU-G (addr 0x35)||||
|(AWS)LED Bar(NeoPixel)|SK6812*10||neopixels||

# Pin Map
https://docs.m5stack.com/en/core/core2

## Speaker(NS4168) 
※通常のNode-RED MCUで使うにはPinは考慮しなくても大丈夫
| BCLK | LRCK | DATA | SPK_EN | 
| :--: | :--: | :--: | :--: |
| 12  | 0 | 2|AXP_IO2|
## MIC
| clk | Data|
| :--: |:--: |
| 0  |34|
## AXP Power Indicator Light
| Green LED | Vibration motor|
| :----: | :----: |
| AXP_IO1| AXP_LDO3|

## Internal I2C
- CAP.TOUCH FT6336U:0x38, INT:GPIO39
- 6-Axis MotionTracking Sensor MPU6886:0x68
- RTC BM8563
- AXP192
- (AWS)Hardware encryption chip ATECC608B-TNGTLSU-G:0x35

| SCL | SDA |
| :-: | :-: |
| 22  | 21  |

## TF Card
| MOSI | MISO | CLK | CS  |
| :--: | :--: | :-: | :-: |
| 23   | 38   | 18  | 4   |

## LED Bar(NeoPixel)
|Data|
|:==:|
|25|

## Grove A Port
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 33  | 32  | 5V  | GND |
## Grove B Port(AWS)
| ADC(AnalogIn) | DAC(AnalogOut) | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 36  | 26  | 5V  | GND |
## Grove C Port(AWS)
| RXD | TXD | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 14  | 13  | 5V  | GND |

# 備考
## Vibration
Functionで使えます。
```
vibration.write(true);
```