# ESP32/M5Paper
Platform esp32/m5paper

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash16MB+PSRAM8MB) | 〇 | 〇 | 〇 |  
| Display(540x690) | IT8951E | 〇   | 〇   | 〇   |
| Touch screen|||||
|TF-Card||||||
| Button|Multi-function | 〇   | 〇   | 〇   |
|RTC|BM8563|   |   |   |

//|LED|Green| 〇   | 〇   | 〇   |
//|Buzzer|Passive Buzzer||||

# Pin Map
https://docs.m5stack.com/en/core/m5paper


## Button
Digital In (PullUp)
| Right | Button Press/PWR | Left |
| :--: | :--: | :--: |
| 37  | 38 | 39|

## Buzzer
DisitalOut
| Buzzer |
| :--: |
| 2  |

## Power Control
DisitalOut
| MOS |
| :--: |
| 12  |

## Internal I2C
- GT911
- SHT30
- BM8563
- FM24C02

| SCL | SDA |
| :-: | :-: |
| 22  | 21  |

## TF Card
| MOSI | MISO | CLK | CS  |
| :--: | :--: | :-: | :-: |
| 12   | 13   | 14  | 15  |

## Grove A Port
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 25  | 32  | 5V  | GND |
## Grove B Port
| DAC | ADC | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 26  | 33  | 5V  | GND |
## Grove C Port
| RXD | TXD | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 18  | 19  | 5V  | GND |
