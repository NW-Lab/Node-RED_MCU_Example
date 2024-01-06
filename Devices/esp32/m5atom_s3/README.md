# ESP32/M5AtomS3
Platform esp32/m5atome_s3

|Moddable|Node-RED MCU|Node-RED MCU Plugin|
|:--:|:--:|:--:|
|〇|〇|〇|

# Feature
| | | Moddable | NodeRED MCU | NodeRED MCU Plugin|
|:--|:--|:--: |:--: |:--:|
| MCU | ESP32-S3(Flash 4MB) | 〇 | 〇 | 〇 |  
| LCD(128x128)| N085-1212TBWIG06-C08 | 〇   | 〇   | 〇   |
| Button  | A | 〇  | 〇  | 〇  |
| IR LED||〇|〇|〇|
|3-axis gyroscope and 3-axis accelerometer|MPU6886||||

# Pin Map
https://docs.m5stack.com/en/core/AtomS3

## Button 
Digital In ( Pull Up )
| Btn A |
| :---: |
| 41  |
## IR LED 
Digital Out
| IR |
| :---: |
| 4  |

## I2C
| SCL | SDA |
| :----: |:----: |
| 39     |38|


## Grove Port
| ADC | DAC | 5V  | GND |
| :-: | :-: | :-: | :-: |
| 1  | 2  | 5V  | GND |

![M5AtomS3](https://static-cdn.m5stack.com/resource/docs/products/core/AtomS3/img-b85e925c-adff-445d-994c-45987dc97a44.jpg)