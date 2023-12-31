# ESP32/M5Dial
Platform esp32/m5dial
m5stampS3+周辺機器

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|×|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32-S3(Flash 8MB) | 〇 | 〇 | 〇 | 
|Screen(240x240)| GC9A01| 〇 | 〇 | 〇 |
|Touch driver|FT3267||||
|RFID|WS1850S||||
|RTC|BM8563||||
|(Stamp)Button|BTN0|〇|〇|〇|
|(Stamp)RGB LED(NeoPixel)|WS2812C-2020|〇|〇|〇|


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
Digital Out
| BZ |
| :---: |
| 3  |

## Encoder 
| A | B |
|:---:|:---:|
| 39 | 40 |

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