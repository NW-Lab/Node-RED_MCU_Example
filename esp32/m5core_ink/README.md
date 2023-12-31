# ESP32/M5Core Ink
Platform esp32/m5core_ink

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash4MB) | 〇 | 〇 | 〇 |  
| Display(200x200) | GDEW0154M09 | 〇   | 〇   | 〇   |
| Button|| 〇   | 〇   | 〇   |
|LED|Green| 〇   | 〇   | 〇   |
|RTC|BM8563|〇   |〇   |〇   |
|Buzzer|Passive Buzzer||||

# Pin Map
https://docs.m5stack.com/en/core/coreink

## Button
Digital In (PullUp)
| Left Position | Button Press | Right Position | Physical Button|
| :--: | :--: | :--: |:--: |
| 37  | 38 | 39|5|

## LED
DisitalOut
| LED |
| :--: |
| 10  |

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
- BM8563

| SCL | SDA |
| :-: | :-: |
| 22  | 21  |

## Grove A Port
| SCL | SDA | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 33  | 32  | 5V  | GND |
