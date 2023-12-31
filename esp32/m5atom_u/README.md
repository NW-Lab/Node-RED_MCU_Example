# ESP32/M5ATOM U
Platform esp32/m5atom_u

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32(Flash 4MB) | 〇 | 〇 | 〇 |  
| Button  | A | 〇  | 〇  | 〇  |
| IR LED||〇|〇|〇|
| RGB LED(NeoPixel) | SK6812 3535 x 1 | 〇   | 〇   | 〇   |
|Mic|SPM1423||||

# Pin Map
https://docs.m5stack.com/en/core/ATOM%20U

## Button 
Digital In ( Pull Up )
| Btn A |
| :---: |
| 39  |

## IR LED 
Digital Out
| IR |
| :---: |
| 12  |


## RGB LED(NeoPixel)
| Data |
| :----: |
| 27     |

## Mic
| MIC_CLK | MIC_DATA |
| :----: | :----: |
| 5     | 19|

## Grove Port A
| SDA | SCL | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 26  | 32  | 5V  | GND |

![M5Atom U](https://static-cdn.m5stack.com/resource/docs/products/core/ATOM%20U/img-19c15e28-eedc-4058-bef5-2541fd81dd92.jpg)