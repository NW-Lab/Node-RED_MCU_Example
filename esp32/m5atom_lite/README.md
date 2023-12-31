# ESP32/M5ATOM Lite
Platform esp32/m5atome_lite

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

# Pin Map
https://docs.m5stack.com/en/core/ATOM%20Lite

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

## Grove Port
| ADC | DAC | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 32  | 26  | 5V  | GND |

![M5Atom Lite](https://static-cdn.m5stack.com/resource/docs/products/core/ATOM%20Lite/pinMap-596e43e7-6056-4c25-a4aa-bc941d63b115.png)